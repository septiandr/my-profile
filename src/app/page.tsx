import Hero from "@/components/Hero";
import Header from "@/components/Header";
import About from "@/components/About";
import Projects from "@/components/Project";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        {/* <Testimonials /> */}
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
