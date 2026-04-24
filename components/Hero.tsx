"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 section-container"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-3xl opacity-30 animate-glow-pulse" />
            <div className="relative w-full h-full rounded-full border-2 border-cyan-400/50 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
              <span className="text-4xl font-bold gradient-text">KMJ</span>
            </div>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Krishna Murari Jha</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-300 mb-4"
        >
          Full Stack Developer & Problem Solver
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
        >
          Building innovative solutions with Java, JavaScript, and modern web technologies.
          Specialized in backend development and creating seamless user experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:krishna987170@gmail.com"
            className="px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center gap-6 text-gray-400"
        >
          <a href="mailto:krishna987170@gmail.com" className="hover:text-cyan-400 transition-colors">
            Email
          </a>
          <span>•</span>
          <span>Greater Noida</span>
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl opacity-10 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl opacity-10 pointer-events-none"
      />
    </section>
  );
}
