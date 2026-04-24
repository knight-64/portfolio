"use client";

import { motion } from "framer-motion";

export default function Navigation() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-40 glassmorphism border-b border-cyan-400/10"
    >
      <div className="section-container flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold gradient-text text-glow"
        >
          KMJ
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ color: "#00d4ff", textShadow: "0 0 10px rgba(0, 212, 255, 0.8)" }}
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          href="mailto:krishna987170@gmail.com"
          className="hidden sm:block px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
        >
          Get in Touch
        </motion.a>
      </div>
    </motion.nav>
  );
}
