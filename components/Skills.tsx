"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "Python", "TypeScript", "SQL"],
    },
    {
      category: "Frontend Development",
      skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "Backend Development",
      skills: ["Node.js", "Express", "Database Design", "RESTful APIs", "System Design"],
    },
    {
      category: "Core Competencies",
      skills: ["Problem Solving", "Algorithms", "Data Structures", "OOP", "Design Patterns"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="skills"
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
            <span className="gradient-text">Skills & Expertise</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="glow-card"
              >
                <h3 className="text-cyan-400 font-semibold text-lg mb-6">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-gray-200 text-sm font-medium hover:text-cyan-400 transition-all cursor-pointer"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-gray-300">Certifications & Learning</h3>
            <div className="glow-card">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-1">
                    Introduction to Data Science Job Simulation
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Completed: Jan 2026 - Focused on data analysis, statistics, and ML concepts
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
