"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-cyan-400/10 py-12 bg-gradient-to-t from-darker to-dark">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Krishna Murari Jha</h3>
            <p className="text-gray-400">Full Stack Developer & Problem Solver</p>
          </div>

          <div className="flex justify-center gap-8 mb-8 text-sm">
            <a href="mailto:krishna987170@gmail.com" className="hover:text-cyan-400 transition-colors">
              Email
            </a>
            <a href="tel:+919871701091" className="hover:text-cyan-400 transition-colors">
              Phone
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">
              Projects
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-8 border-t border-cyan-400/10 text-gray-500 text-sm"
          >
            <p>© {currentYear} Krishna Murari Jha. All rights reserved.</p>
            <p className="mt-2 text-xs">
              Built with React, Next.js, TypeScript, and Tailwind CSS. Deployed on Vercel.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
