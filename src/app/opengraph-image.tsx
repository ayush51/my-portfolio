import { ImageResponse } from "next/og";

export const alt = "Ayush Aggarwal — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05060b",
          backgroundImage:
            "radial-gradient(circle at 20% 10%, rgba(99,102,241,0.35), transparent 50%), radial-gradient(circle at 85% 85%, rgba(34,211,238,0.25), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#22d3ee", fontSize: 28, marginBottom: 24 }}>
          ~/ayush
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#f8fafc",
            letterSpacing: "-2px",
          }}
        >
          Ayush Aggarwal
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#94a3b8",
            marginTop: 20,
          }}
        >
          Software Engineer II — Cloud Infrastructure & Data Platforms
        </div>
        <div style={{ display: "flex", gap: 16, marginTop: 48 }}>
          {["AWS", "Node.js", "Python", "React", "Terraform"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                padding: "10px 24px",
                borderRadius: 9999,
                border: "1px solid rgba(148,163,184,0.35)",
                color: "#c7d2fe",
                fontSize: 24,
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 56,
            color: "#475569",
            fontSize: 24,
          }}
        >
          ayush-aggarwal.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
