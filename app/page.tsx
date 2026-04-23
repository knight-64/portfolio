import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}
