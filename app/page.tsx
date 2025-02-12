import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
// import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";

export default function Home() {
  return (
    <div className="relative bg-black flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "#home" },
            { name: "About", link: "#about" },
            // { name: "Projects", link: "#projects" },
            // { name: "Testimonials", link: "#testimonials" },
            { name: "Experience", link: "#experience" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <Hero />
        <Grid />
        {/* <RecentProjects /> */}
        <Experience />
        <Footer />
      </div>
    </div>
  );
}
