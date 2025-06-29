import React from "react";
import { FaGears } from "react-icons/fa6";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      {/* Icon with purple background */}
      <a href="#skills">
        <div className="bg-purple-600 rounded-md p-1.5 flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:shadow-lg hover:bg-purple-700">
          <FaGears className="text-white w-5 h-5" />
        </div>
      </a>

      {/* Text info */}
      <div>
        <h2 className="font-semibold">Pavel Chroust</h2>
        <p className="text-sm">Website Developer</p>
      </div>
    </div>
  );
};

export default Logo;
