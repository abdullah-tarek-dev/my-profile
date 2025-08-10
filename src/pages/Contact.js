import emailjs from "@emailjs/browser";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_vroyga2", // Service ID
        "template_gb21m9q", // Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "eil8t0HaNB6Cq7NC_" // Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white relative overflow-hidden"
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-2xl border border-white/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-bold text-white mb-8 text-center tracking-wide">
          Contact Me
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-4 mb-6 rounded-lg bg-white/20 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-4 mb-6 rounded-lg bg-white/20 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="6"
          className="w-full p-4 mb-6 rounded-lg bg-white/20 text-white text-lg placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <motion.button
          type="submit"
          className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white text-lg font-bold rounded-lg shadow-lg hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {status && (
          <p className="text-center text-white mt-6 text-lg">{status}</p>
        )}
      </motion.form>

      {/* زر الرجوع للقائمة الرئيسية */}
      <Link
        to="/"
        className="mt-8 inline-block px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition"
      >
        Back to Home
      </Link>
    </section>
  );
}
