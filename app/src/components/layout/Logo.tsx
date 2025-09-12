import React from "react";
import { FaGears } from "react-icons/fa6";

interface LogoProps {
  showText?: boolean; // toggle text part
  linkTo?: string; // where the icon should link
  className?: string; // optional wrapper classes
}

const Logo: React.FC<LogoProps> = ({
  showText = true,
  linkTo = "#skills",
  className,
}) => {
  return (
    <div className={`flex items-center gap-2 text-gray-700 dark:text-gray-500 ${className ?? ""}`}>
      {/* Icon with purple background */}
      <a href={linkTo}>
        <div className="bg-purple-600 rounded-md p-1.5 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:shadow-lg hover:bg-purple-700">
          <FaGears className="text-white w-5 h-5" />
        </div>
      </a>

      {/* Text info */}
      {showText && (
        <div>
          <h2 className="font-semibold">Pavel Chroust</h2>
          <p className="text-sm">Website Developer</p>
        </div>
      )}
    </div>
  );
};

export default Logo;
