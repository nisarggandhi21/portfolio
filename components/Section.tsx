// A section with its label in a left column on wide screens
const Section = ({
  title,
  aside,
  children,
}: {
  title: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="md:border-l md:border-zinc-700/40 md:pl-6">
    <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-6 md:grid-cols-4">
      <div>
        <h2 className="text-sm font-semibold text-zinc-100">{title}</h2>
        {aside && <p className="mt-1 text-sm text-zinc-500">{aside}</p>}
      </div>
      <div className="md:col-span-3">{children}</div>
    </div>
  </section>
);

export default Section;
