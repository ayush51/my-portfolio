import { ImageResponse } from "next/og";

export const alt = "Ayush Aggarwal | Software Engineer";
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
          background: "#0e0b0b",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#ff5b4a", fontSize: 28, marginBottom: 24 }}>
          ~/ayush
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 700,
            color: "#f4edeb",
            letterSpacing: "-2px",
          }}
        >
          Ayush Aggarwal
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 38,
            color: "#a89b98",
            marginTop: 20,
          }}
        >
          Software Engineer II | Cloud Infrastructure & Data Platforms
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
                color: "#ff8a7d",
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
            color: "#8c807d",
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
