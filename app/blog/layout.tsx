import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="typo-page">
      <SiteHeader current="writing" />
      <main className="min-h-[60vh] pb-16">{children}</main>
      <SiteFooter />
    </div>
  );
}
