//Navbar.jsx

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";

function Navbar() {
  const [navBg, setNavBg] = useState("transparent");
  const [activeSection, setActiveSection] = useState("home");
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observe = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observe.observe(section));

    return () => {
      sections.forEach((section) => observe.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBg("#111");
      } else {
        setNavBg("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        backgroundColor: theme === "light" ? "#f4f4f4" : "#333",
        backdropFilter: "blur(10px)",
        transition: "background-color 0.4s ease",
        color: theme === "light" ? "#333" : "#222",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
        zIndex: 50,
      }}
    >
      <h1 className="text-2xl font-bold text-blue-400">
        kajal <span className="text-pink-400">.portfolio</span>
      </h1>
      <div className="space-x-6 text-lg">
        <a
          href="#home"
          className={`text-lg px-2 ${
            activeSection === "home"
              ? "text-pink-400 font-semibold"
              : theme === "light"
              ? "text-black"
              : "text-white"
          } hover:text-pink-400 transition`}
        >
          Home
        </a>

        <a
          href="#about"
          className={`text-lg px-2 ${
            activeSection === "about"
              ? "text-pink-400 font-semibold"
              : theme === "light"
              ? "text-black"
              : "text-white"
          } hover:text-pink-400 transition`}
        >
          About
        </a>

        <a
          href="#projects"
          className={`text-lg px-2 ${
            activeSection === "projects"
              ? "text-pink-400 font-semibold"
              : theme === "light"
              ? "text-black"
              : "text-white"
          } hover:text-pink-400 transition`}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={`text-lg px-2 ${
            activeSection === "contact"
              ? "text-pink-400 font-semibold"
              : theme === "light"
              ? "text-black"
              : "text-white"
          } hover:text-pink-400 transition`}
        >
          Contact
        </a>
      </div>

      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#222" : "#ddd",
          color: theme === "light" ? "#fff" : "#000",
          border: "none",
          borderRadius: "8px",
          padding: "8px 14px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </motion.nav>
  );
}

export default Navbar;
