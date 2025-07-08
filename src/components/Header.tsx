import React from "react";
import { headerLinks } from "../config/navigation";
import { Link, useLocation } from "react-router";

const Header: React.FC = () => {

  const location = useLocation();

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a
            href="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-700"
          >
            ReactTS Boilerplate
          </a>
        </div>

        <div className="hidden md:flex space-x-8">
          {headerLinks.map((link, index) => (
            <Link
            key={index}
              to={link.path}
              className={`hover:text-blue-600 font-medium transition ${location.pathname == link.path ? "underline text-blue-600" : ' text-gray-600'}`}
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
