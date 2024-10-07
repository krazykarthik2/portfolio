import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { FaTimeline } from "react-icons/fa6";
import { PiGithubLogo, PiGithubLogoFill } from "react-icons/pi";
import { TbBrandGithubFilled, TbPhotoHexagon } from "react-icons/tb";
import Markdown from "react-markdown";
import { Link, useLocation } from "react-router-dom";
const arr = ["proj1", "proj2", "proj3", "proj4"];
function Projects() {
  const [current, setCurrent] = useState(0);
  const max = arr.length - 1;
  const [pagins, setPagins] = useState([]);
  const location  =useLocation();
  useEffect(() => {
    const keydown_listen = (e) => {
      if (location.pathname.split(/[\/#]/).filter((e) => e)[0] == "projects") {
        if (e.key == "ArrowLeft") {
          setCurrent((x) => (x > 0 ? x - 1 : 0));
        } else if (e.key == "ArrowRight") {
          setCurrent((x) => (x < max ? x + 1 : max));
        }
      }
    };
    window.addEventListener("keydown", keydown_listen);
    return () => {
      window.removeEventListener("keydown", keydown_listen);
    };
  }, []);
  useEffect(() => {
    setPagins([
      ...new Array(current).fill("."),
      "_",
      ...new Array(arr.length - current - 1).fill("."),
    ]);
  }, [current]);
  return (
    <div className="w-full h-screen d-center justify-between stack">
      <h1 className="d-center text-4xl">Projects</h1>
      <div className="mid d-center justify-between w-full">
        <button
          onClick={() => {
            setCurrent((x) => (x > 0 ? x - 1 : 0));
          }}
          tabIndex={-1}
          className="disabled:text-gray-800 disabled:pointer-events-none hover:scale-150 duration-300"
          disabled={current == 0}
        >
          <FaAngleLeft size={27} />
        </button>
        <Markdown>{arr[current]}</Markdown>

        <button
          onClick={() => {
            setCurrent((x) => (x < max ? x + 1 : max));
          }}
          tabIndex={-1}
          className="disabled:text-gray-800 disabled:pointer-events-none hover:scale-150 duration-300"
          disabled={current == max}
        >
          <FaAngleRight size={47} />
        </button>
      </div>
      <div className="end d-ends w-full px-10">
        <Link
          to="/projects/timeline"
          className="d-center gap-3 text-2xl text-white bg-green-700 py-5 pt-2 px-5 rounded-t-3xl"
        >
          <FaTimeline size={27} />
          <span>timeline</span>
          <FaArrowRight size={17} />
        </Link>
        <div className="mid d-center">
          <div className="pagins-cont d-center text-5xl font-bold -translate-y-5">
            {pagins.map((e, i) => (
              <div key={i} className="w-8 d-center">
                {e}
              </div>
            ))}
          </div>
        </div>
        <Link
          target="_new"
          to="https://github.com/krazykarthik2"
          className="d-center  text-2xl text-white bg-green-700 py-5 pt-2 px-5 rounded-t-3xl"
        >
          <PiGithubLogoFill size={27} />
          <span>/krazykarthik2</span>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
