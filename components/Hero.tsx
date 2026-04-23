export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4"
    >
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm a <span className="text-blue-400">Software Developer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I build beautiful and functional web applications. Check out my work below.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
