import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// "—— SHEET 01 · …" style label: small spaced-out mono caps, optional coral dash
export const Label = ({
  children,
  dash = false,
  className = "",
}: {
  children: React.ReactNode;
  dash?: boolean;
  className?: string;
}) => (
  <p className={`label flex items-center gap-4 text-muted ${className}`}>
    {dash && <span aria-hidden className="h-px w-8 bg-accent" />}
    <span>{children}</span>
  </p>
);

// Keyboard-hint style badge, e.g. "Ctrl K"
export const Kbd = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded-md border border-line bg-bg px-2 py-0.5 font-mono text-xs text-muted">
    {children}
  </span>
);

// Boxed index like "A1"
export const IndexBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="rounded border border-line px-1.5 py-0.5 font-mono text-xs text-muted">
    {children}
  </span>
);

// Coral tag on a tinted background, e.g. "2 yrs"
export const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="whitespace-nowrap rounded-md bg-accent/10 px-2 py-1 font-mono text-xs text-accent">
    {children}
  </span>
);

// White rounded tile holding a company logo, or its first letter without one
export const LogoTile = ({
  name,
  logo,
  size = "md",
}: {
  name: string;
  logo?: string;
  size?: "sm" | "md";
}) => {
  const box = size === "sm" ? "h-8 w-8" : "h-11 w-11";
  const img = size === "sm" ? 22 : 30;
  return (
    <span
      className={`flex ${box} flex-none items-center justify-center overflow-hidden rounded-lg bg-white shadow-sm`}
    >
      {logo ? (
        <Image
          src={logo}
          alt=""
          width={img}
          height={img}
          unoptimized
          className="object-contain"
          style={{ width: img, height: img }}
        />
      ) : (
        <span className="font-serif text-xl text-bg">{name.charAt(0)}</span>
      )}
    </span>
  );
};

const buttonBase =
  "group inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3.5 text-base font-medium transition";

// Cream primary button, like "Get the answer →"
export const PrimaryButton = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link href={href} className={`${buttonBase} bg-cream text-bg hover:bg-white`}>
    {children}
    <FiArrowRight
      aria-hidden
      className="transition group-hover:translate-x-0.5"
    />
  </Link>
);

// Outlined secondary button
export const SecondaryButton = ({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    className={`${buttonBase} border border-line text-ink hover:border-muted/60 hover:bg-surface`}
  >
    {children}
  </a>
);
