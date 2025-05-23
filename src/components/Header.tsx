import React from "react";
import { headerLinks } from "../config/navigation";
import { Link } from "react-router";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-xl font-bold text-indigo-600 hover:text-indigo-700"
          >
            ReactTS Boilerplate
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {headerLinks.map((link) => (
            <Link
              to={link.path}
              className="text-gray-600 hover:text-indigo-600 font-medium transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
