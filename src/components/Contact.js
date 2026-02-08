import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6
      bg-gradient-to-br from-indigo-600 to-purple-600
      text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center
        bg-white/10 backdrop-blur-xl
        rounded-3xl p-10 shadow-2xl"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Let’s Connect
        </h2>

        <p className="mb-2">📞 9880357229</p>
        <p className="mb-4">📧 saveenadevadiga8@gmail.com</p>

        <p className="mb-6">
          🌐{" "}
          <a
            href="https://github.com/Saveena-devadiga"
            target="_blank"
            rel="noreferrer"
            className="underline"
          >
            github.com/Saveena-devadiga
          </a>
        </p>

        <a
          href="mailto:saveenadevadiga8@gmail.com"
          className="inline-block bg-white text-indigo-700
          px-8 py-3 rounded-full font-semibold
          hover:scale-105 transition"
        >
          Send Email
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
