export default function Blog() {
  const posts = [
    {
      title: "Getting Started with Next.js",
      excerpt: "Learn how to build modern web applications with Next.js and React.",
      date: "Mar 23, 2024",
      slug: "#",
    },
    {
      title: "TypeScript Best Practices",
      excerpt: "Essential tips for writing scalable and maintainable TypeScript code.",
      date: "Mar 15, 2024",
      slug: "#",
    },
    {
      title: "Web Performance Optimization",
      excerpt: "Techniques to improve your website's speed and user experience.",
      date: "Mar 1, 2024",
      slug: "#",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-950 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Latest Blog Posts
        </h2>
        <div className="space-y-6">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.slug}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg dark:hover:shadow-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all block"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {post.date}
                </time>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {post.excerpt}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
