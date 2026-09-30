import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Shell of the main site: about me and the blog
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
}
