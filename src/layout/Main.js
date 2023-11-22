import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
