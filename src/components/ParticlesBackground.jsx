// src/components/ParticlesBackground.jsx
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
   <div className="relative w-full h-screen ">
  {/* هنا بنحط خلفية الحركات */}
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      background: {
        color: "transparent", // عشان نخلي اللون من Tailwind مش من المكتبة
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
        collisions: { enable: true },
        move: { direction: "none", enable: true, outModes: "bounce", random: false, speed: 2, straight: false },
        number: { density: { enable: true, area: 800 }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }}
  />

  {/* المحتوى فوق الخلفية */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
  </div>
</div>

  );
};

export default ParticlesBackground;
