//Projects.jsx

import { motion } from "framer-motion";
import { title } from "framer-motion/client";

function Projects() {
  const ProjectList = [
    {
      title: "React Notes App",
      description: "A clean and fast note-taking app with category filters.",
    },
    {
      title: "Recipe Finder",
      description: "An app to search healthy recipes using an external API.",
    },
    {
      title:"Portfolio Website",
      description:"A personal portfolio built using React and Framer Motion.",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-16 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-center mb-10 text-pink-500"
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {ProjectList.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/50 transition"
          >
            <h3 className="text-2xl font-semibold text-blue-400">
              {project.title}
            </h3>
            <p className="mt-3 text-gray-300">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
