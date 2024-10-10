import React, { useEffect, useMemo, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import getLeetCodeData from "../../../json/leetcodeapi";

function Skills() {
  const [leetData, setLeetData] = useState(null);
  useEffect(() => {
    let x=async ()=>{setLeetData(await getLeetCodeData())}
    x();
  }, []);
  return (
    <div className="w-full h-screen d-center stack">
      <div className="top h-full"></div>
      <div className="end d-ends w-full px-10">
        <Link
          to="/career"
          className="d-center gap-3 text-2xl text-white bg-green-700 py-5 pt-2 px-5 rounded-t-3xl"
        >
          <HiMiniAcademicCap size={27} />
          <span>Qualifications</span>
          <FaArrowRight size={17} />
        </Link>
        <div className="mid d-center"></div>
        <Link
          target="_new"
          to="https://leetcode.com/u/karthikkrazy"
          className="d-center stack text-2xl text-white bg-green-700 py-0 pt-2 px-5 rounded-t-3xl"
        >
          <div className="d-center">
            <SiLeetcode size={27} />
            <div>
              /karthikkrazy [<span>{leetData?.solvedProblem}</span>]
            </div>
          </div>
          <div className="d-center justify-between w-full">
            <div className="stack d-center text-sm">
              <div className="text-xl">{leetData?.easySolved}</div>
              <div>Easy</div>
            </div>
            <div className="stack d-center text-sm">
              <div className="text-xl">{leetData?.mediumSolved}</div>
              <div>Medium</div>
            </div>
            <div className="stack d-center text-sm">
              <div className="text-xl">{leetData?.hardSolved}</div>
              <div>Hard</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Skills;
