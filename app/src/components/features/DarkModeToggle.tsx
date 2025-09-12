// src/components/DarkModeToggleButton.tsx
import React, { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "./ThemeContext";

export const DarkModeToggleButton: React.FC = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white hover:scale-110 transition-transform z-50"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
    </button>
  );
};
