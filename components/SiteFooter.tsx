import CurrentYear from "@/components/CurrentYear";
import { profile } from "@/data";

const SiteFooter = () => (
  <footer className="typo-footer text-secondary">
    <span>
      © <CurrentYear initialYear={new Date().getFullYear()} /> {profile.name}
    </span>
    <span aria-hidden>·</span>
    {profile.links.map((link) => (
      <a
        key={link.label}
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label.toLowerCase()}
      </a>
    ))}
  </footer>
);

export default SiteFooter;
