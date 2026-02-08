import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = ["Home", "About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50
      bg-white/10 backdrop-blur-xl border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Saveena
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {menu.map((item) => (
            <li key={item} className="relative group">
              <a href={`#${item.toLowerCase()}`}>
                {item}
              </a>
              <span
                className="absolute left-0 -bottom-1 h-0.5 w-0 
                bg-white transition-all duration-300 group-hover:w-full"
              />
            </li>
          ))}
        </ul>

        {/* Resume */}
        <a
          href="/SAVEENARESUME.pdf"
          download
          className="hidden md:inline-block bg-white text-indigo-700
          px-5 py-2 rounded-full font-semibold shadow
          hover:scale-105 transition"
        >
          Resume
        </a>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/40 backdrop-blur-xl">
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            {menu.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
                  {item}
                </a>
              </li>
            ))}
            <a
              href="/SAVEENARESUME.pdf"
              download
              className="bg-white text-indigo-700 px-6 py-2 rounded-full font-semibold"
            >
              Resume
            </a>
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
