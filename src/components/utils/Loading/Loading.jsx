import React from "react";
import { FaSpinner } from "react-icons/fa";
import { TbReload } from "react-icons/tb";

function Loading() {
  return (
    <div className="w-full h-screen d-center bg-black text-white">
      <div className="cont stack d-center">
        <div className="dot"></div>

        <span className="animate-spin d-center">
          <TbReload size={50} />
        </span>

        <div className="l">loading</div>
      </div>
    </div>
  );
}

export default Loading;
