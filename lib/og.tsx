import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

// Link-preview images (LinkedIn, X, WhatsApp, Slack) share one card design,
// drawn in the site's fonts and colours

export const ogSize = { width: 1200, height: 630 };

const colors = {
  bg: "#0c0b09",
  line: "#2a2621",
  ink: "#efe8dc",
  muted: "#a39b8f",
  faint: "#6e675d",
  accent: "#ef7b4d",
};

const font = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), "assets/fonts", file));

const fonts = () => [
  {
    name: "Instrument Serif",
    data: font("InstrumentSerif-Regular.woff"),
    weight: 400 as const,
    style: "normal" as const,
  },
  {
    name: "Instrument Serif",
    data: font("InstrumentSerif-Italic.woff"),
    weight: 400 as const,
    style: "italic" as const,
  },
  { name: "Geist", data: font("Geist-Regular.ttf"), weight: 400 as const },
  {
    name: "Geist Mono",
    data: font("GeistMono-Regular.ttf"),
    weight: 400 as const,
  },
];

// Emoji would need to be downloaded while rendering, so they're left out
export const stripEmoji = (text: string) =>
  text.replace(/\p{Extended_Pictographic}️?/gu, "").trim();

type Card = {
  // Small uppercase line above the title
  eyebrow: string;
  title: string;
  // Optional second line of the title, in coral italics
  accent?: string;
  subtitle?: string;
  // Address shown at the bottom, e.g. "nisarg-gandhi.com/blog"
  footer: string;
};

export function ogCard({ eyebrow, title, accent, subtitle, footer }: Card) {
  const long = title.length + (accent?.length ?? 0) > 60;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "76px 96px 64px",
        backgroundColor: colors.bg,
        backgroundImage: `linear-gradient(${colors.line}55 1px, transparent 1px), linear-gradient(90deg, ${colors.line}55 1px, transparent 1px)`,
        backgroundSize: "56px 56px",
        color: colors.ink,
        fontFamily: "Geist",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontFamily: "Geist Mono",
          fontSize: 24,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: colors.muted,
        }}
      >
        <div
          style={{
            width: 48,
            height: 2,
            backgroundColor: colors.accent,
            marginRight: 24,
          }}
        />
        {eyebrow}
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Instrument Serif",
            fontSize: long ? 76 : 104,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          <span>{title}</span>
          {accent && (
            <span style={{ fontStyle: "italic", color: colors.accent }}>
              {accent}
            </span>
          )}
        </div>
        {subtitle && (
          <div
            style={{
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.4,
              color: colors.muted,
              maxWidth: 940,
            }}
          >
            {subtitle}
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: `1px solid ${colors.line}`,
          paddingTop: 28,
          fontFamily: "Geist Mono",
          fontSize: 24,
          letterSpacing: "0.12em",
          color: colors.faint,
        }}
      >
        <span>{footer}</span>
        <span style={{ color: colors.muted }}>Nisarg Gandhi</span>
      </div>
    </div>,
    { ...ogSize, fonts: fonts() },
  );
}
