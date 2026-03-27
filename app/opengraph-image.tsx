import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Pauco — Logiciel de gestion restaurant tout-en-un pour restaurateurs indépendants";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#1c3829",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "#2D6A4A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            P
          </div>
          <span
            style={{
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.6)",
            }}
          >
            PAUCO
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          Le logiciel de gestion
          <br />
          <span style={{ color: "#6DBF85" }}>tout-en-un</span> des restaurateurs
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.5,
            maxWidth: "700px",
            marginBottom: "40px",
          }}
        >
          E-réputation · Gestion CA · Fiches techniques · Coût matière ·
          Planning · Coûts bar
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "#2D6A4A",
              color: "white",
              fontSize: "22px",
              fontWeight: 600,
              padding: "16px 32px",
              borderRadius: "12px",
            }}
          >
            99€/mois à vie — Prix fondateur
          </div>
          <span
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            50 places max
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          paucoandco.com
        </div>
      </div>
    ),
    { ...size }
  );
}
