import React from "react";
import socials from "../../../json/socials.js";
import { Link } from "react-router-dom";
function Socials() {
  return (
    <div className="stack d-center duration-300 group">
      {socials.all.map((e,i) => (
        <Link to={e.to} key={i} className="hover:!scale-125 hover:!m-3 duration-500 m-1 group-hover:scale-90"><e.icon size={37}/></Link>
      ))}
    </div>
  );
}

export default Socials;
