"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 border-t border-cyan-400/10"
    >
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12">
            <span className="gradient-text">About Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="glow-card">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm an enthusiastic, self-motivated, reliable, and responsible developer with a passion
                for creating impactful software solutions. As a mature team worker, I thrive in collaborative
                environments while also taking initiative with independent projects.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                Currently pursuing my degree at Greater Noida Institute of Technology, where I'm mastering
                full-stack development, algorithms, and system design. I specialize in backend development
                and have hands-on experience building scalable applications.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <div className="glow-card">
                <h3 className="text-cyan-400 font-semibold mb-2">Education</h3>
                <p className="text-gray-300">Greater Noida Institute Of Technology</p>
                <p className="text-gray-500 text-sm">2024 - Ongoing</p>
              </div>

              <div className="glow-card">
                <h3 className="text-cyan-400 font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Greater Noida, India</p>
                <p className="text-gray-500 text-sm">UTC +5:30</p>
              </div>

              <div className="glow-card">
                <h3 className="text-cyan-400 font-semibold mb-2">Contact</h3>
                <p className="text-gray-300">krishna987170@gmail.com</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
