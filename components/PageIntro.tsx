import Container from "./Container";

// Big page title and intro, used at the top of inner pages
const PageIntro = ({
  title,
  intro,
  children,
}: {
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) => (
  <Container className="mt-16 sm:mt-32">
    <header className="max-w-2xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 text-base leading-7 text-zinc-400">{intro}</p>
    </header>
    <div className="mt-16 sm:mt-20">{children}</div>
  </Container>
);

export default PageIntro;
