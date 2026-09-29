// A resume-style section: small label on the left, content on the right
const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="grid gap-5 border-t border-border py-12 md:grid-cols-[9rem_1fr] md:gap-10 scroll-mt-6 break-inside-avoid-page"
  >
    <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground md:pt-1.5">
      {title}
    </h2>
    <div className="min-w-0">{children}</div>
  </section>
);

export default Section;
