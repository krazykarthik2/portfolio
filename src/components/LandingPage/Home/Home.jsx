import React from "react";
import hero from "./../../../assets/hero.jpg";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaAnglesDown } from "react-icons/fa6";
function Home() {
  return (
    <div className="w-full h-screen d-center stack">
      <div className="d-center">
        <div className="left stack w-2/3 text-right p-10 gap-4">
          <div className="h1 font-bold text-5xl">Karthik Krazy</div>
          <p className="text-md">
            Aspired by the brilliance of computational machines and the
            fascination has encouraged me to become a programmer.
          </p>
          <Link to="/about" className="d-center text-gray-800 animate-pulse duration-500 ">
            <FaAnglesDown size={60} />
          </Link>
        </div>
        <div className="right stack w-1/3">
          <img src={hero} />
        </div>
      </div>
    </div>
  );
}

export default Home;
