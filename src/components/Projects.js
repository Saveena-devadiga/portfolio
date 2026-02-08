import { motion } from "framer-motion";

function Projects() {
  const mainProjects = [
    {
      title: "OrgaNest – Event Management System",
      desc: "Full-stack event management web application with booking and admin features.",
      tech: "React · Node.js · Express · MySQL",
      github: "https://github.com/Saveena-devadiga/organest",
      image: "organest.png"
    }
  ];

  const internshipProjects = [
    {
      title: "Calculator Application",
      desc: "User-friendly calculator built using HTML, CSS, and JavaScript.",
      tech: "HTML · CSS · JavaScript",
      demo: "https://internship-minor-calculator-project.netlify.app",
      image: "calculator.png"
    },
    {
      title: "Form Validation Application",
      desc: "Complete form validation system using JavaScript validation.",
      tech: "HTML · CSS · JavaScript",
      demo: "https://major-form-validation-project.netlify.app",
      image: "form-validation.png"
    }
  ];

  return (
    <section
      id="projects"
      className="py-28 px-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Projects
        </h2>

        {/* MAIN PROJECTS */}
        <h3 className="text-2xl font-bold mb-8 text-indigo-700">
          Major Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {mainProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-xl
              rounded-3xl shadow-xl overflow-hidden transition"
            >
              <img
                src={`/projects/${p.image}`}
                alt={p.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                <p className="text-gray-700 mb-3">{p.desc}</p>
                <p className="text-sm text-gray-500 mb-4">{p.tech}</p>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 font-semibold hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* INTERNSHIP PROJECTS */}
        <h3 className="text-2xl font-bold mb-8 text-indigo-700">
          Internship Projects
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {internshipProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/80 backdrop-blur-xl
              rounded-3xl shadow-xl overflow-hidden transition"
            >
              <img
                src={`/projects/${p.image}`}
                alt={p.title}
                className="w-full h-44 object-cover"
              />

              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
                <p className="text-gray-700 mb-3">{p.desc}</p>
                <p className="text-sm text-gray-500 mb-4">{p.tech}</p>

                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block bg-indigo-600 text-white
                  px-5 py-2 rounded-full font-medium
                  hover:bg-indigo-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
