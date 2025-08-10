import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    // نقرأ القيمة من localStorage أو نخليها false افتراضياً
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
document.body.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-4 right-4 p-2 rounded-full border dark:border-gray-400 border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition z-50"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
