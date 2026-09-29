import Container from "@/components/Container";
import { Label, PrimaryButton, SecondaryButton } from "@/components/ui";

export default function NotFound() {
  return (
    <Container className="pt-24 sm:pt-36">
      <Label dash>Error 404 · Page not found</Label>
      <h1 className="mt-8 font-serif text-6xl leading-[0.98] tracking-tight text-ink sm:text-7xl">
        This page is
        <span className="block italic text-accent">off the map.</span>
      </h1>
      <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted">
        Sorry, I couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <PrimaryButton href="/">Go back home</PrimaryButton>
        <SecondaryButton href="/blog">Read the articles</SecondaryButton>
      </div>
    </Container>
  );
}
