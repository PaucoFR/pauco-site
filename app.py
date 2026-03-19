import os
import requests as http
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__)

STATIC_DIR = os.path.join(os.path.dirname(__file__), "static")


@app.route("/")
def index():
    return send_from_directory(STATIC_DIR, "index.html")


@app.route("/paul.jpg")
def paul_img():
    return send_from_directory(STATIC_DIR, "paul.jpg")


@app.route("/api/audit", methods=["POST"])
def audit():
    data = request.get_json(silent=True) or {}
    restaurant = data.get("restaurant", "").strip()
    ville = data.get("ville", "").strip()

    if not restaurant or not ville:
        return jsonify({"error": "Champs requis manquants"}), 400

    api_key = os.environ.get("GOOGLE_PLACES_API_KEY", "")
    if not api_key:
        return jsonify({"error": "Clé API non configurée"}), 500

    query = f"{restaurant} {ville}"

    # Step 1 — Find place
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
    candidates = find_resp.json().get("candidates", [])
    if not candidates:
        return jsonify({"error": "Restaurant non trouvé"}), 404

    place_id = candidates[0]["place_id"]

    # Step 2 — Place details
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
    result = details_resp.json().get("result", {})

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
