//About.jsx

import { color, motion } from "framer-motion";

function About() {
  const skills = [
    { name: "react", color: "bg-blue-500", level: 90 },
    { name: "JavaScript", color: "bg-yellow-400", level: 85 },
    { name: "Tailwind CSS", color: "bg-red-400", level: 80 },
  ];

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-20 px-6 text-center"
    >
      <h2 className="text-4xl font-bold text-pink-400 mb-6">About Me</h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-10">
        I'm <span className="text-pink-500 font-semibold">kajal kotak</span>, a
        passionate React Developer who loves bringing ideas to life with clean
        code and creative design. My goal is to build web experiences that are
        both functional and delightful for users. 💻✨
      </p>

      <motion.a
        href="/resume.pdf"
        download="kajal-kotak-Resume.pdf"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 mb-10 inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
      >
        Download Resume
      </motion.a>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/4"
          >
            <h3 className="text-2xl text-blue-400 mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
              <motion.div
                className={`${skill.color} h-3 rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: i * 0.2 }}
              />
            </div>
            <p className="text-sm mt-2">{skill.level}% proficiency</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default About;
