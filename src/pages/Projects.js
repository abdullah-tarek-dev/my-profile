import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

import ecomImg from "../assets/ecom.jpg";
import curreImg from "../assets/curre.jpg";
import noteImg from "../assets/note.jpg";
import portImg from "../assets/portf.jpg";
import myport from "../assets/myport.jpg";

// ضيف صور لمشاريع الباك
// import lmsImg from "../assets/lms.jpg";
// import vetImg from "../assets/vetora.jpg";
// import apiImg from "../assets/api.jpg";
// import studentImg from "../assets/student.jpg";
// import mvcImg from "../assets/mvc.jpg";

export default function Projects() {
  const projects = [
        // Frontend Projects
    {
      title: "Portfolio Website",
      category: "Frontend",
      description:
        "A personal portfolio built with React, Tailwind CSS, and Framer Motion.",
      image: myport,
      github: "https://github.com/abdullah-tarek-dev/my-profile",
      live: "https://my-profile-silk-iota.vercel.app/",
    },

    {
      title: "Notes App",
      category: "Frontend",
      description:
        "A notes application built with React and Local Storage.",
      image: noteImg,
      github: "https://github.com/abdullah-tarek-dev/NotesReactApp",
      live: "https://notes-react-app-v1t7.vercel.app/",
    },

    {
      title: "Currency Converter",
      category: "Frontend",
      description:
        "Currency converter built with React and external APIs.",
      image: curreImg,
      github: "https://github.com/abdullah-tarek-dev/Currency_converter",
      live: "https://currency-converter-qso8.vercel.app/",
    },

    {
      title: "E-Commerce App",
      category: "Frontend",
      description:
        "E-commerce application built with HTML, CSS, JavaScript, and DOM manipulation.",
      image: ecomImg,
      github: "https://github.com/abdullah-tarek-dev/E-commerce",
      live: "https://e-commerce-roan-ten-39.vercel.app/",
    },

    {
      title: "3D Portfolio",
      category: "Frontend",
      description:
        "Portfolio website with 3D effects using HTML and CSS.",
      image: portImg,
      github: "https://github.com/abdullah-tarek-dev/super-my-profile-",
      live: "https://super-my-profile.vercel.app/",
    },
    // Backend Projects
    {
      title: "Veterinary Medical Platform",
      category: "Backend",
      description:
        "Graduation project built with ASP.NET Core Web API and PostgreSQL. Includes online consultations, clinic management, appointment scheduling, and medical records management.",
      // image: vetImg,
      github: "https://github.com/Yacoub777/Vetora.API",
    },

    {
      title: "Learning Management System (LMS)",
      category: "Backend",
      description:
        "Full-featured LMS built with ASP.NET Core Web API, PostgreSQL, and Clean Architecture. Supports authentication, course management, and student enrollment.",
      // image: lmsImg,
      github:
        "https://github.com/abdullah-tarek-dev/Learning_Management_Systems-LMS-",
    },

    {
      title: "E-Commerce Web API",
      category: "Backend",
      description:
        "Scalable e-commerce backend built with ASP.NET Core Web API and PostgreSQL. Includes products, categories, orders, shopping cart, and authentication.",
      // image: apiImg,
      github: "https://github.com/abdullah-tarek-dev/Ecommerce-web-api",
    },

    {
      title: "Student Management System",
      category: "Backend",
      description:
        "Student management application built with ASP.NET Core MVC for handling student information, enrollment, and academic operations.",
      // image: studentImg,
      github: "https://github.com/abdullah-tarek-dev/studentmanagement",
    },

    {
      title: "E-Commerce MVC",
      category: "Backend",
      description:
        "E-commerce web application developed with ASP.NET Core MVC featuring product management, authentication, shopping cart, and order processing.",
      // image: mvcImg,
      github: "https://github.com/abdullah-tarek-dev/Ecommerce-MVC",
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
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  project.category === "Backend"
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white"
                }`}
              >
                {project.category}
              </span>

              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  <FaGithub /> Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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