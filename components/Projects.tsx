"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI Interviewer",
      description:
        "An AI-powered interview assistant that simulates technical interview sessions. Users can practice with realistic question generation, real-time feedback, and performance evaluation based on their responses.",
      tech: ["Java", "AI/ML", "Backend Development", "Problem Solving"],
      duration: "Oct 2025 - Nov 2025",
      highlights: [
        "Question generation using AI algorithms",
        "Real-time response analysis",
        "Interview performance metrics",
        "Object-oriented design patterns",
      ],
      color: "from-cyan-500/20 to-blue-500/20",
    },
  ];

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
      id="projects"
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
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>

          <div className="grid gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveProject(idx)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="glow-card relative">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-base mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-300">
                              <span className="text-cyan-400 mt-1">▸</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-1 flex flex-col justify-between">
                      <div className="glow-card bg-gradient-to-br from-slate-800 to-slate-900">
                        <p className="text-gray-400 text-sm mb-2">Duration</p>
                        <p className="text-white font-semibold">{project.duration}</p>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all"
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">More projects coming soon!</p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#contact"
              className="inline-block px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
