import { Link } from "react-router-dom";

export default function About() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-8 py-16"
      style={{
        background: "linear-gradient(to right, #1f2937, #111827, #000000)",
      }}
    >
      <div
        className="max-w-4xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-12 text-white transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
      >
<h1 className="text-5xl font-bold mb-8 text-center">Who am I?</h1>

<p className="text-xl leading-relaxed mb-8">
  Hi! I'm <span className="font-semibold">Abdullah Tarek</span>, a passionate
  and motivated{" "}
  <span className="text-blue-400">
    Backend .NET Developer & Frontend Developer
  </span>{" "}
  with hands-on experience in building scalable web applications and RESTful
  APIs. I enjoy developing clean, maintainable, and user-friendly software
  solutions using modern technologies.
</p>

<p className="text-xl leading-relaxed mb-8">
  I graduated in{" "}
  <span className="font-semibold text-green-400">2026</span> from{" "}
  <span className="font-semibold text-yellow-300">
    Al-Azhar University
  </span>
  , Faculty of Engineering, Department of Computer Systems and Engineering.
</p>

<p className="text-xl leading-relaxed mb-8">
  My technical expertise includes{" "}
  <span className="font-semibold text-blue-300">
    ASP.NET Core Web API, ASP.NET Core MVC, Entity Framework Core, PostgreSQL,
    SQL Server, React.js, Next.js, and RESTful API Development
  </span>
  . I have also completed backend development training based on the ITI learning
  path and participated in various technical activities and community events.
</p>

<p className="text-xl leading-relaxed mb-8">
  I enjoy learning new technologies, solving real-world problems, contributing
  to team projects, and building applications that create meaningful impact. My
  goal is to continuously grow as a software engineer and deliver high-quality
  software solutions.
</p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-12">
          {/* <a
            href="/Abdullah_Tarek_CV.pdf"
            download
            className="px-6 py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-500 transition text-white"
          >
            Download CV
          </a> */}
          <Link
            to="/"
            className="px-6 py-3 bg-gray-600 rounded-lg font-semibold hover:bg-gray-500 transition text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
