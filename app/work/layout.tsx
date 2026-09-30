import Footer from "@/components/Footer";
import WorkHeader from "@/components/WorkHeader";

// Shell of the work site (work.nisarg-gandhi.com), kept separate from the
// main site: no links to the blog or the homepage
export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <WorkHeader />
      <main className="flex-auto">{children}</main>
      <Footer variant="work" />
    </div>
  );
}
