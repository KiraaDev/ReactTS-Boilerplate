import React from "react";
import Marquee from "../components/Marquee";

const HomePage: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Welcome to ReactTS Boilerplate
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-6">
        This template provides a basic setup for React using{" "}
        <a
          href="https://vite.dev/"
          target="_blank"
          className="underline italic font-medium"
        >
          Vite
        </a>
        . It is designed to help developers get started quickly with a fast and
        modern development environment.
      </p>

    <Marquee />
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="https://github.com/KiraaDev/ReactTS-Boilerplate/blob/main/README.md"
          target="_blank"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition"
        >
          Documentation
        </a>
      </div>
    </div>
  );
};

export default HomePage;
