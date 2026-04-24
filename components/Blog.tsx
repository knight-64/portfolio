"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Blog() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      className="relative py-20 border-t border-cyan-400/10"
      ref={ref}
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12">
            <span className="gradient-text">Coming Soon</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-lg max-w-2xl"
          >
            I'm working on sharing my insights on software development, problem-solving strategies, and tech journey.
            Articles and case studies coming soon!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
