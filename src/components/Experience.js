import { motion } from "framer-motion";

function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6
      bg-gradient-to-br from-indigo-50 via-white to-blue-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto
        bg-white/80 backdrop-blur-xl
        rounded-3xl shadow-2xl p-8 md:p-14"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14">
          Experience
        </h2>

        <div className="border-l-4 border-indigo-500 pl-8 space-y-12">
          {/* Internship */}
          <div>
            <h3 className="text-xl font-semibold">
              Frontend Web Development Intern
            </h3>
            <p className="text-indigo-600 font-medium">
              PlaceMantra · Jun 2025 – Aug 2025
            </p>

            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
              <li>
                Developed responsive web applications using HTML, CSS, and
                JavaScript.
              </li>
              <li>
                Built a functional calculator application as a minor project.
              </li>
              <li>
                Created a complete form validation system using JavaScript.
              </li>
              <li>
                Improved UI design, validation logic, and user experience.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
