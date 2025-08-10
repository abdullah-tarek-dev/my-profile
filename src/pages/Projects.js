import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";  // استيراد Link
import ecomImg from "../assets/ecom.jpg";
import curreImg from "../assets/curre.jpg";
import noteImg from "../assets/note.jpg";
import portImg from "../assets/portf.jpg";


export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React, Tailwind CSS, and Framer Motion.",
      image: myport,
      github: "https://github.com/abdullah-tarek-dev/my-profile",
      live: "https://my-profile-silk-iota.vercel.app/",
    },
    {
      title: "Notes App",
      description: "A note app built with react and using local storage.",
      image: noteImg,
      github: "https://github.com/abdullah-tarek-dev/NotesReactApp",
      live: "https://notes-react-app-v1t7.vercel.app/",
    },
    {
      title: "Currency Converter",
      description: " A currency Converter built with react and using api .",
      image: curreImg,
      github: "https://github.com/abdullah-tarek-dev/Currency_converter",
      live: "https://currency-converter-qso8.vercel.app/",
    },
    {
      title: "E-Commerce App",
      description: " e-commerce application with HTML, CSS, JS and use DOM",
      image: ecomImg,
      github: "https://github.com/abdullah-tarek-dev/E-commerce",
      live: "https://e-commerce-roan-ten-39.vercel.app/",
    },
    {
      title: "3D portofolio",
      description: "portofolio website with 3D effect using html and css",
      image: portImg,
      github: "https://github.com/abdullah-tarek-dev/super-my-profile-",
      live: "https://super-my-profile.vercel.app/",
    },
  ];

  return (
    <section
      className="min-h-screen px-8 py-16 flex flex-col"
      style={{
        background: "linear-gradient(to right, #1f2937, #111827, #000000)",
      }}
    >
      <motion.h1
        className="text-5xl font-bold text-white text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto flex-grow">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* زر View More */}
      <motion.div
        className="flex justify-center mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <a
          href="https://github.com/abdullah-tarek-dev?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-500 hover:shadow-2xl transition-all duration-300"
        >
          <FaGithub /> View More on GitHub
        </a>
      </motion.div>

      {/* زر الرجوع للقائمة الرئيسية */}
      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
