import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";

const AppLayout: React.FC = () => {
  return (
<main className="flex flex-col h-screen w-full">
  <Header />
  <div className="flex-grow w-full flex justify-center items-center">
    <Outlet />
  </div>
</main>
  );
};

export default AppLayout;
