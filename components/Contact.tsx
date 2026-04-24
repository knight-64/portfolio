"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, FormEvent, ChangeEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (touched[name]) {
      const newErrors = { ...errors };
      delete newErrors[name as keyof Errors];
      setErrors(newErrors);
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate field on blur
    const newErrors = { ...errors };
    if (name === "name") {
      if (!formData.name.trim()) {
        newErrors.name = "Name is required";
      }
    } else if (name === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
    } else if (name === "message") {
      if (!formData.message.trim()) {
        newErrors.message = "Message is required";
      } else if (formData.message.trim().length < 10) {
        newErrors.message = "Message must be at least 10 characters";
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    }, 3000);
  };

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
      id="contact"
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
            <span className="gradient-text">Let's Connect</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glow-card hover:scale-105 transition-transform duration-300">
                <h3 className="text-cyan-400 font-semibold text-lg mb-2">Email</h3>
                <a
                  href="mailto:krishna987170@gmail.com"
                  className="text-gray-300 hover:text-cyan-400 transition-colors break-all"
                >
                  krishna987170@gmail.com
                </a>
              </div>

              <div className="glow-card hover:scale-105 transition-transform duration-300">
                <h3 className="text-cyan-400 font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-300">+91 9871701091</p>
              </div>

              <div className="glow-card hover:scale-105 transition-transform duration-300">
                <h3 className="text-cyan-400 font-semibold text-lg mb-2">Location</h3>
                <p className="text-gray-300">Greater Noida, India</p>
              </div>

              <div className="glow-card hover:scale-105 transition-transform duration-300">
                <h3 className="text-cyan-400 font-semibold text-lg mb-4">Available For</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Full-time opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Freelance projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Technical discussions
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={handleSubmit}
              className="glow-card space-y-6"
            >
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 flex items-center gap-2"
                >
                  <span>✓</span>
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                    touched.name && errors.name
                      ? "border-red-500 bg-red-500/5 focus:ring-red-400/50"
                      : "border-cyan-400/20 focus:border-cyan-400"
                  }`}
                  placeholder="Your name"
                  aria-label="Name"
                  required
                />
                {touched.name && errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                    touched.email && errors.email
                      ? "border-red-500 bg-red-500/5 focus:ring-red-400/50"
                      : "border-cyan-400/20 focus:border-cyan-400"
                  }`}
                  placeholder="your@email.com"
                  aria-label="Email"
                  required
                />
                {touched.email && errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message ({formData.message.length}/200)
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  rows={5}
                  maxLength={200}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-800/50 border transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-none ${
                    touched.message && errors.message
                      ? "border-red-500 bg-red-500/5 focus:ring-red-400/50"
                      : "border-cyan-400/20 focus:border-cyan-400"
                  }`}
                  placeholder="Tell me about your project..."
                  aria-label="Message"
                  required
                />
                {touched.message && errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm mt-1"
                  >
                    {errors.message}
                  </motion.p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-dark font-semibold hover:shadow-lg hover:shadow-cyan-400/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-dark border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

