"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    // In production, you'd send this to an API endpoint
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitted(true);
    setLoading(false);
    (e.target as HTMLFormElement).reset();

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white text-center">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
          Have a project in mind? Let's talk!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6" suppressHydrationWarning>
          <div suppressHydrationWarning>
            <label className="block text-gray-900 dark:text-white font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
              suppressHydrationWarning
            />
          </div>

          <div suppressHydrationWarning>
            <label className="block text-gray-900 dark:text-white font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
              suppressHydrationWarning
            />
          </div>

          <div suppressHydrationWarning>
            <label className="block text-gray-900 dark:text-white font-semibold mb-2">
              Message
            </label>
            <textarea
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Tell me about your project..."
              suppressHydrationWarning
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
            suppressHydrationWarning
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {submitted && (
            <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-lg text-center">
              Thanks for your message! I'll get back to you soon.
            </div>
          )}
        </form>

        <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
            Or reach out directly:
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:your@email.com"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Email
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
