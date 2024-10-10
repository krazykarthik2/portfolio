import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { FaTimeline } from "react-icons/fa6";
import { TbPhotoHexagon } from "react-icons/tb";
import Markdown from "react-markdown";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const arr = ["lorem1", "lorem2", "lorem3"];
function About() {
  const [current, setCurrent] = useState(0);
  const max = arr.length - 1;
  const [pagins, setPagins] = useState([]);
  const [searchP, setSearchP] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    const keydown_listen = (e) => {
      if(location.pathname.split(/[\/#]/).filter(e=>e)[0]=="about")
      {if (e.key == "ArrowLeft") {
        setCurrent((x) => (x > 0 ? x - 1 : 0));
      } else if (e.key == "ArrowRight") {
        setCurrent((x) => (x < max ? x + 1 : max));
      }}
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
      <h1 className="d-center text-4xl">About</h1>
      <div className="mid d-center justify-between w-full">
        <button
          onClick={() => {
            setCurrent((x) => (x > 0 ? x - 1 : 0));
          }}
          tabIndex={-1}
          className="disabled:text-gray-800 disabled:pointer-events-none hover:scale-150 duration-300"
          disabled={current == 0}
        >
          <FaAngleLeft size={37} />
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
          <FaAngleRight size={37} />
        </button>
      </div>
      <div className="end d-ends w-full px-10">
        <Link
          to={"/about/timeline"}
          className="d-center gap-3 text-2xl text-white bg-green-700 py-2 pt-5 px-10 rounded-t-3xl"
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
        <Link to={"/gallery"} className="d-center gap-3 text-2xl text-white bg-green-700 py-2 pt-5 px-10 rounded-t-3xl">
          <TbPhotoHexagon size={27} />
          <span>Gallery</span>
          <FaArrowRight size={17} />
        </Link>
      </div>
    </div>
  );
}

export default About;
