import React from "react";
import { Link } from "react-router";

const ContactPage: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-2">
        If you have any questions or suggestions, feel free to reach out.
      </p>
      <p className="text-blue-600 font-medium mb-2">
        Email: gaufogomer@gmail.com
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="https://github.com/KiraaDev/"
          target="_blank"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition"
        >
          Visit my GitHub
        </Link>
        <Link
          to="https://gomergaufojr-portfolio.vercel.app/"
          target="_blank"
          className="border bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
        >
          View my Portfolio
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
