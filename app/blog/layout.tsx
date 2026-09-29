import Link from "next/link";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center sm:px-10 px-5">
      <div className="max-w-3xl w-full">
        <header className="flex items-center justify-between pt-10 pb-6">
          <Link href="/" className="font-bold text-white hover:text-purple transition">
            Nisarg Gandhi
          </Link>
          <nav className="flex gap-6 text-sm text-white-100">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/blog" className="hover:text-white transition">
              Blog
            </Link>
          </nav>
        </header>
        <main className="pb-20">{children}</main>
      </div>
    </div>
  );
}
