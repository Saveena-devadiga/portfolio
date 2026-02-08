import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6
      bg-gradient-to-br from-indigo-50 via-white to-blue-50
      overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-24 right-10 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-24 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto
        bg-white/70 backdrop-blur-xl
        rounded-3xl shadow-2xl p-8 md:p-14"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              I am a <strong>BCA graduate</strong> with a strong passion for
              full-stack web development. I enjoy turning ideas into
              scalable, user-friendly applications.
            </p>
            <p>
              I am a quick learner, team player, and motivated to grow
              continuously in the field of software development.
            </p>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              🎓 <strong>Education</strong><br />
              BCA (2023–2025) — CGPA 8.9
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              💻 <strong>Focus Areas</strong><br />
              Full Stack Development, UI Design
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              🌱 <strong>Strengths</strong><br />
              Teamwork · Leadership · Quick Learner
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
