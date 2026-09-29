import { ImageResponse } from "next/og";

export const alt = "Nisarg Gandhi – Software Developer based in Mumbai, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview image shown when the site is shared on LinkedIn, X, WhatsApp, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 15% 10%, rgba(57,59,178,0.45), transparent 45%), radial-gradient(circle at 90% 90%, rgba(203,172,249,0.25), transparent 45%)",
          color: "#fff",
        }}
      >
        <div style={{ fontSize: 36, color: "#C1C2D3", marginBottom: 16 }}>
          Hi, I&apos;m
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.1 }}>
          Nisarg Gandhi
        </div>
        <div style={{ fontSize: 48, color: "#CBACF9", marginTop: 24 }}>
          Software Developer · Mumbai, India
        </div>
      </div>
    ),
    size
  );
}
