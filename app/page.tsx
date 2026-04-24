"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white relative">
      {/* Background effects */}
      <ParticleBackground />
      <CursorGlow />

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
        <Blog />
        <Footer />
      </div>
    </main>
  );
}
