import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaDatabase,
} from "react-icons/fa";
import {
  SiDotnet,
  SiPostgresql,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiPostman,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSharp } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Skills() {
const frontendSkills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Next.js", icon: <TbBrandNextjs className="text-white" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "jQuery", icon: <SiJquery className="text-blue-700" /> },
  ];

  const backendSkills = [
    { name: "ASP.NET Core MVC", icon: <SiDotnet className="text-blue-400" /> },
    { name: "ASP.NET Core API", icon: <SiDotnet className="text-indigo-400" /> },
    { name: "C#", icon: <SiSharp className="text-purple-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "Databases", icon: <FaDatabase className="text-green-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  ];

  const SkillsGrid = ({ skills, title, delay = 0 }) => (
    <div className="w-full max-w-5xl mb-16">
      <motion.h2
        className="text-3xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay }}
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 12px 24px rgba(255, 255, 255, 0.7)",
              transition: { duration: 0.3 },
            }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
          >
            {skill.icon && <div className="text-6xl mb-4">{skill.icon}</div>}
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-8 py-16"
      style={{
        background: "linear-gradient(to right, #1f2937, #111827, #000000)",
      }}
    >
      <motion.h1
        className="text-5xl font-bold text-white mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>

      <SkillsGrid title="Frontend" skills={frontendSkills} delay={0.2} />
      <SkillsGrid title="Backend" skills={backendSkills} delay={0.9} />

      <div className="flex justify-center mt-4">
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