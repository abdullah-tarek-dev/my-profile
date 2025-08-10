import '../css/Home.module.css'
import ParticlesBackground from "../components/ParticlesBackground";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggle from '../components/ThemeToggle';


export default function Home() {
  return (
    <>
      <section className="  relative flex flex-col items-center justify-center min-h-screen text-black dark:text-white transition-colors duration-300">
        <div className="absolute inset-0">
          <ParticlesBackground />
        </div>
        <div className="relative z-10 text-center">
      <ThemeToggle />
          <h1 className="text-7xl font-bold mb-2">Abdullah Tarek</h1>
          <p className="text-xl mb-6">
            Frontend Developer | Backend Developer | Full Stack
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <a
              href="https://github.com/abdullah-tarek-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border rounded-full border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdullah-tarek-946aa6335"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border rounded-full border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/share/1FWdFsWh4r/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border rounded-full border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://wa.me/201145881084"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 border rounded-full border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:engabdullahtarek123@gmail.com?subject=Hello%20Abdullah&body=I%20would%20like%20to%20contact%20you"
              className="p-4 border rounded-full border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* روابط الصفحات */}
          <ul className="flex gap-6 justify-center text-lg list-disc list-inside">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-900 dark:hover:text-blue-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                className="hover:text-blue-900 dark:hover:text-blue-400"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-blue-900 dark:hover:text-blue-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-900 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>

    </>
  );
}
