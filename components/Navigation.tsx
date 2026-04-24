"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.querySelector(item.href),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 0) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  // Render with suppressHydrationWarning on the nav element to avoid hydration mismatch
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glassmorphism border-b border-cyan-400/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold gradient-text text-glow py-4"
        >
          KMJ
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ color: "#00d4ff" }}
              className={`text-sm font-medium transition-all duration-300 ${
                mounted && activeSection === item.id
                  ? "text-cyan-400 border-b-2 border-cyan-400 pb-1"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {/* Desktop CTA Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="mailto:krishna987170@gmail.com"
            className="hidden sm:block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
          >
            Get in Touch
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 w-8 h-8 relative z-50"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 12 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-cyan-400 transition-all"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-cyan-400 transition-all"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -12 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-cyan-400 transition-all"
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ translateX: "-100%" }}
              animate={{ translateX: 0 }}
              exit={{ translateX: "-100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="md:hidden fixed left-0 top-16 w-64 max-w-xs h-screen bg-gradient-to-b from-slate-900 to-slate-800 border-r border-cyan-400/10 z-40"
            >
              <div className="flex flex-col gap-2 p-6">
                {navItems.map((item, idx) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`px-4 py-3 rounded-lg font-medium transition-all ${
                      mounted && activeSection === item.id
                        ? "bg-cyan-400/20 text-cyan-400 border-l-2 border-cyan-400"
                        : "text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </motion.a>
                ))}

                {/* Mobile CTA Button */}
                <motion.a
                  href="mailto:krishna987170@gmail.com"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-4 px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark font-semibold text-center hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                >
                  Get in Touch
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

