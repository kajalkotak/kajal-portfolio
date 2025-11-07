//Home.jsx

import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

function Home() {
  const [theme] = useTheme();
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20 transition-colors duration-500 ${
        theme === "light" ? "bg-gray-700 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-white"
      >
        Hi, I'm <span className="text-pink-500">Kajak Kotak</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl text-white mt-4"
      >
        I’m a passionate React Developer who loves creating beautiful,
        interactive, and user-friendly web experiences.
      </motion.p>

      <a
        href="#projects"
        className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-3 rounded-lg text-lg mt-5"
      >
        View My Work
      </a>
    </motion.section>
  );
}

export default Home;
