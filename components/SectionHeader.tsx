import { Label } from "./ui";

// Mono label, serif title and a short intro, e.g. "THE ATLAS · 15 DECISIONS / The verdicts"
const SectionHeader = ({
  label,
  title,
  intro,
  as: Heading = "h2",
  size = "md",
}: {
  label: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  as?: "h1" | "h2";
  size?: "md" | "lg";
}) => (
  <header className="max-w-3xl">
    <Label>{label}</Label>
    <Heading
      className={`mt-4 font-serif leading-[1.02] tracking-tight text-ink ${
        size === "lg"
          ? "text-5xl sm:text-6xl lg:text-7xl"
          : "text-5xl sm:text-6xl"
      }`}
    >
      {title}
    </Heading>
    {intro && (
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
        {intro}
      </p>
    )}
  </header>
);

export default SectionHeader;
