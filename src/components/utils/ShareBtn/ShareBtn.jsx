import React from "react";
import { FaShareNodes } from "react-icons/fa6";
import { RiShareLine } from "react-icons/ri";

function ShareBtn({ title, text, url }) {
  return (
    <button
      onClick={() =>
        navigator.share({
          title: title,
          text: text,
          url: url,
        })
      }
      className="text-white bg-gray-800 p-5 rounded-full -translate-x-4 translate-y-2 hover:translate-x-2 hover:-translate-y-5 focus:translate-x-2 focus:-translate-y-5 transition-all duration-500"
    >
      <RiShareLine size={40} />
    </button>
  );
}

export default ShareBtn;
