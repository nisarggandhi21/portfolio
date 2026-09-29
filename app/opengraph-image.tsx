import { ImageResponse } from "next/og";

export const alt =
  "Nisarg Gandhi – Full Stack Developer based in Mumbai, India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Preview image shown when the site is shared on LinkedIn, X, WhatsApp, etc.
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 110px",
        backgroundColor: "#000000",
        color: "#F4F4F5",
      }}
    >
      <div style={{ width: 64, height: 3, backgroundColor: "#7BA702" }} />
      <div
        style={{
          fontSize: 104,
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1.05,
          marginTop: 40,
        }}
      >
        Nisarg Gandhi
      </div>
      <div style={{ fontSize: 42, color: "#A1A1AA", marginTop: 24 }}>
        Full Stack Developer · Mumbai, India
      </div>
    </div>,
    size,
  );
}
