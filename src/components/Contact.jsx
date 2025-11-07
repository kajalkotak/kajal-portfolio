//Contact.jsx

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useTheme } from "../ThemeContext";

function Contact() {
  const [theme] = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("please fill in all fields before sending");
      return;
    }

    alert("your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 ${
        theme === "light" ? "bg-gray-100 text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h2 className="text-4xl font-bold mb-8 text-pink-500">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md p-6 rounded-xl shadow-lg ${
          theme === "light" ? "bg-white" : "bg-gray-800"
        }`}
      >
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Send Message 🚀
        </button>
      </form>
    </motion.section>
  );
}

export default Contact;
