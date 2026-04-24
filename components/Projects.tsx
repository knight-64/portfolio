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
      title: "AI Resume Analyzer",
      description:
        "Advanced AI-powered resume analyzer built with FastAPI backend and modern web UI. Analyzes resumes to provide detailed feedback on structure, keywords, formatting, and alignment with job descriptions. Uses natural language processing to extract and evaluate key competencies.",
      tech: ["Python", "FastAPI", "AI/ML", "NLP", "HTML", "CSS", "JavaScript"],
      duration: "2026",
      highlights: [
        "Resume parsing and keyword extraction",
        "AI-powered skill analysis",
        "Job description matching",
        "Detailed performance metrics",
        "User-friendly web interface",
      ],
      color: "from-purple-500/20 to-pink-500/20",
      github: "https://github.com/knight-64/ai-resume-analyzer",
      tags: ["Featured", "AI/ML"],
    },
    {
      id: 2,
      title: "AI Interviewer",
      description:
        "An AI-powered interview assistant that simulates technical interview sessions. Users can practice with realistic question generation, real-time feedback, and performance evaluation based on their responses. Designed to help candidates prepare for technical interviews.",
      tech: ["Java", "AI/ML", "Backend Development", "Problem Solving", "OOP"],
      duration: "Oct 2025 - Nov 2025",
      highlights: [
        "Question generation using AI algorithms",
        "Real-time response analysis",
        "Interview performance metrics",
        "Object-oriented design patterns",
        "Adaptive difficulty levels",
      ],
      color: "from-cyan-500/20 to-blue-500/20",
      github: "https://github.com/knight-64",
      tags: ["Featured"],
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
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 mb-12">
            Open-source projects showcasing full-stack development, AI/ML, and problem-solving skills
          </motion.p>

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
                      <div className="flex items-start gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-cyan-400">
                          {project.title}
                        </h3>
                        {project.tags && project.tags.length > 0 && (
                          <div className="flex gap-2">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 rounded-full text-xs font-bold bg-cyan-500 text-dark"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

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
                            className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-1 flex flex-col justify-between gap-4">
                      <div className="glow-card bg-gradient-to-br from-slate-800 to-slate-900">
                        <p className="text-gray-400 text-sm mb-2">Duration</p>
                        <p className="text-white font-semibold">{project.duration}</p>
                      </div>

                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all text-center"
                      >
                        View on GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-16"
          >
            <div className="glow-card">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">View More</h3>
              <p className="text-gray-300 mb-6">
                Check out more projects and contributions on GitHub. Constantly working on new ideas and open-source contributions.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/knight-64"
                className="inline-block px-8 py-3 rounded-lg border-2 border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400/10 transition-all"
              >
                View GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

