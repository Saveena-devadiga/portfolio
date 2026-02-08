import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center
      bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600
      text-white overflow-hidden px-6"
    >
      {/* Glow blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl" />

      {/* Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/10 backdrop-blur-xl
        rounded-3xl shadow-2xl p-10 md:p-14 text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Saveena 
        </h1>

        <p className="text-lg md:text-xl text-blue-100 mb-4">
          BCA Graduate • Full Stack Web Developer
        </p>

        <p className="opacity-90 mb-8 max-w-xl mx-auto">
          I design and build modern, responsive web applications
          with clean UI and real-world functionality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/SAVEENARESUME.pdf"
            download
            className="bg-white text-indigo-700 px-8 py-3
            rounded-full font-semibold shadow
            hover:scale-105 transition"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/Saveena-devadiga"
            target="_blank"
            rel="noreferrer"
            className="border border-white/70 px-8 py-3
            rounded-full font-semibold
            hover:bg-white hover:text-indigo-700 transition"
          >
            GitHub
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 text-sm opacity-80 animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}

export default Hero;
