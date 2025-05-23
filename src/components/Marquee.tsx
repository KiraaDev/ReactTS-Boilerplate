import React from "react";
import react from "../assets/react.svg";
import vite from "../assets/vite.svg";
import typescript from "../assets/typescript.svg";
import tailwind from "../assets/tailwind.svg";
import reactRouter from "../assets/react-router.svg";

const Marquee: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="animate-marquee py-12 whitespace-nowrap flex items-center">
        <span className="mx-4 text-4xl flex items-center">
          <img src={react} alt="React Logo" className="h-20 w-20 mr-2" />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img src={vite} alt="Vite Logo" className="h-20 w-20 mr-2" />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img
            src={typescript}
            alt="TypeScript Logo"
            className="h-20 w-20 mr-2"
          />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img src={tailwind} alt="Tailwind Logo" className="h-20 w-20 mr-2" />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img
            src={reactRouter}
            alt="react-router Logo"
            className="h-20 w-20 mr-2"
          />
        </span>
        <span className="mx-4 text-4xl font-semibold">Axios</span>
      </div>

      <div className="absolute top-0 animate-marquee2 py-12 whitespace-nowrap flex items-center">
        <span className="mx-4 text-4xl flex items-center">
          <img src={react} alt="React Logo" className="h-20 w-20 mr-2" />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img src={vite} alt="Vite Logo" className="h-20 w-20 mr-2" />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img
            src={typescript}
            alt="TypeScript Logo"
            className="h-20 w-20 mr-2"
          />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img src={tailwind} alt="Tailwind Logo" className="h-20 w-20 mr-2" />
        </span>
        <span className="mx-4 text-4xl flex items-center">
          <img
            src={reactRouter}
            alt="react-router Logo"
            className="h-20 w-20 mr-2"
          />
        </span>
        <span className="mx-4 text-4xl font-semibold">Axios</span>
      </div>
    </div>
  );
};

export default Marquee;
