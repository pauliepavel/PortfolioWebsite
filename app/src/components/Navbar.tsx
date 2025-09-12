import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-[#F3EDED] pt-3">
      <div className="max-w-6xl mx-auto px-4 pt-6 flex justify-center items-center">
        {/* Toggle Button (Mobile) */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-40 text-gray-800 text-base font-medium">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="cursor-pointer hover:text-purple-600 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F3EDED] pt-6">
          <ul className="flex flex-col space-y-4 text-gray-800 text-base font-medium items-center">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
