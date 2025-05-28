import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Project";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
