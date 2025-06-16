import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#F3EDED] text-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 text-base font-medium items-center">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="hover:text-purple-600 transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-6 text-xl text-gray-600">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
            <FaLinkedin />
          </a>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="text-sm text-purple-600 hover:underline transition-all"
        >
          ↑ Back to Top
        </button>
      </div>

      {/* Copyright */}
      <p className=" flex justify-center gap-1 text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} 
        <a href="#contact">
          <div className="cursor-pointer hover:text-purple-600 transition-colors duration-200">
            pauliepavel
          </div>
        </a> 
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
