import { motion } from "framer-motion";

function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 bg-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-white rounded-3xl
        shadow-2xl p-8 md:p-14"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
          Education
        </h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg">
              Bachelor of Computer Applications (BCA)
            </h3>
            <p>2022 – 2025 | CGPA: 8.9</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Pre-University Education (PUC)
            </h3>
            <p>2020 – 2022 | 85.33%</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Secondary School Education
            </h3>
            <p>2017 – 2020 | 85%</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
