import TopBar from "@/components/resume/TopBar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8">
      <TopBar showBlog />
      <main className="pb-24">{children}</main>
    </div>
  );
}
