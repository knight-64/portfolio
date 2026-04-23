export default function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A brief description of your first project and the technologies used.",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Project Two",
      description: "Another exciting project showcasing your skills and experience.",
      tags: ["Next.js", "PostgreSQL", "Node.js"],
      link: "#",
    },
    {
      title: "Project Three",
      description: "A full-stack application demonstrating your expertise.",
      tags: ["React", "Express", "MongoDB"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-950 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
