import { motion } from "framer-motion";

function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "PHP", "C++"]
    },
    {
      title: "Web Technologies",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "Oracle (SQL & PL/SQL)"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "Canva", "Power BI", "MS Office"]
    }
  ];

  return (
    <section
      id="skills"
      className="relative py-28 px-6
      bg-gradient-to-br from-blue-50 via-white to-indigo-50
      overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-200/40 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto
        bg-white/70 backdrop-blur-xl
        rounded-3xl shadow-2xl p-8 md:p-14"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Skills & Technologies
        </h2>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full
                    bg-indigo-100 text-indigo-700
                    font-medium text-sm
                    hover:bg-indigo-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
