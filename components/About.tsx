export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Git",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate software developer with a love for creating clean, scalable web applications.
              With expertise in modern web technologies, I help bring ideas to life through code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source,
              or sharing knowledge with the community.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <p className="text-gray-900 dark:text-white font-semibold">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
