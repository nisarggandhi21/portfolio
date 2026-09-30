import Container from "./Container";
import { Monogram } from "./ui";
import { profile } from "@/data";
import { workHref } from "@/lib/site";

// Header of the work site: name and a contact button, no site navigation
const WorkHeader = () => (
  <header className="relative z-50 border-b border-line bg-bg/80 backdrop-blur">
    <Container className="flex h-[72px] items-center justify-between gap-4">
      <a href={workHref} className="flex min-w-0 items-center gap-3">
        <Monogram />
        <span className="truncate font-serif text-[1.7rem] leading-none tracking-tight">
          {profile.name}
        </span>
      </a>
      <a
        href={`mailto:${profile.email}`}
        className="flex-none rounded-lg bg-cream px-4 py-2 text-[15px] font-medium text-bg transition hover:bg-white"
      >
        Get in touch
      </a>
    </Container>
  </header>
);

export default WorkHeader;
