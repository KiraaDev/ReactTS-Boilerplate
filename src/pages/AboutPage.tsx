import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="text-gray-700 max-w-2xl mx-auto">
        This React + TypeScript boilerplate is built using Vite for fast performance and easy setup.
        It’s intended to provide developers with a clean and modern starting point to build scalable applications.
      </p>
    </div>
  );
};

export default AboutPage;
