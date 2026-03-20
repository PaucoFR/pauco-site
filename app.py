import logging
import os

import requests as http
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
log = app.logger

STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")


@app.route("/")
def index():
    return send_from_directory(STATIC_DIR, "index.html")


@app.route("/paul.jpg")
def paul_img():
    return send_from_directory(STATIC_DIR, "paul.jpg")


@app.route("/api/health")
def health():
    key = os.environ.get("GOOGLE_PLACES_API_KEY", "")
    return jsonify({"status": "ok", "has_key": bool(key), "key_prefix": key[:8] + "..." if len(key) > 8 else "MISSING"})


@app.route("/api/audit", methods=["POST"])
def audit():
    data = request.get_json(silent=True) or {}
    restaurant = data.get("restaurant", "").strip()
    ville = data.get("ville", "").strip()

    if not restaurant or not ville:
        return jsonify({"error": "Champs requis manquants"}), 400

    api_key = os.environ.get("GOOGLE_PLACES_API_KEY", "")
    if not api_key:
        log.error("GOOGLE_PLACES_API_KEY is not set")
        return jsonify({"error": "Clé API non configurée"}), 500

    query = f"{restaurant} {ville}"

    # Step 1 — Find place
    try:
        find_resp = http.get(
            "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
            params={
                "input": query,
                "inputtype": "textquery",
                "fields": "place_id",
                "key": api_key,
            },
            timeout=10,
        )
        find_data = find_resp.json()
        log.info("FindPlace status=%s query=%r", find_data.get("status"), query)
    except Exception as exc:
        log.exception("FindPlace request failed: %s", exc)
        return jsonify({"error": "Impossible de contacter Google Places"}), 502

    gstatus = find_data.get("status", "")
    if gstatus == "REQUEST_DENIED":
        log.error("FindPlace REQUEST_DENIED: %s", find_data.get("error_message", ""))
        return jsonify({"error": "Clé API Google invalide ou Places API non activée"}), 502
    if gstatus == "OVER_QUERY_LIMIT":
        log.error("FindPlace OVER_QUERY_LIMIT")
        return jsonify({"error": "Quota Google Places dépassé"}), 429
    if gstatus not in ("OK", "ZERO_RESULTS"):
        log.error("FindPlace unexpected status=%s msg=%s", gstatus, find_data.get("error_message", ""))
        return jsonify({"error": f"Erreur Google Places : {gstatus}"}), 502

    candidates = find_data.get("candidates", [])
    if not candidates:
        return jsonify({"error": "Restaurant non trouvé"}), 404

    place_id = candidates[0]["place_id"]

    # Step 2 — Place details
    try:
        details_resp = http.get(
            "https://maps.googleapis.com/maps/api/place/details/json",
            params={
                "place_id": place_id,
                "fields": "name,rating,user_ratings_total,formatted_address",
                "key": api_key,
                "language": "fr",
            },
            timeout=10,
        )
        details_data = details_resp.json()
        log.info("PlaceDetails status=%s place_id=%s", details_data.get("status"), place_id)
    except Exception as exc:
        log.exception("PlaceDetails request failed: %s", exc)
        return jsonify({"error": "Impossible de récupérer les détails"}), 502

    dstatus = details_data.get("status", "")
    if dstatus != "OK":
        log.error("PlaceDetails status=%s msg=%s", dstatus, details_data.get("error_message", ""))
        return jsonify({"error": f"Erreur Google Places : {dstatus}"}), 502

    result = details_data.get("result", {})

    return jsonify(
        {
            "name": result.get("name", restaurant),
            "rating": result.get("rating", 0),
            "nb_avis": result.get("user_ratings_total", 0),
            "address": result.get("formatted_address", ""),
        }
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
