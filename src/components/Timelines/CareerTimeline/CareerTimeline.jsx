import React from "react";
import { FaAnglesDown, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import TimeLineComponent from "../TimeLineComponent";
import { BiUndo } from "react-icons/bi";

const segms = [
  {
    title: "Event 1",
    description: "### Description for event 1",
    tagline: "Tagline 1",
  },
  {
    title: "Event 2",
    description: "### Description for event 2",
    tagline: "Tagline 2",
  },
];

function CareerTimeline() {
  return (
    <TimeLineComponent
      segments={segms}
      beforePage={
        <>
          <h1 className="text-9xl">CAREER</h1>
          <h4>in a timeline</h4>
          <FaAnglesDown size={60} className="text-gray-800 animate-pulse" />
        </>
      }
      afterPage={
        <>
          <div className="top"></div>
          <div className="d-ends w-full px-20">
            <div className="d-center stack items-start">
              <h1 className="text-5xl">EXPLORE </h1>
              <h1 className="text-3xl">OTHER</h1>
              <h1 className="text-2xl">TIMELINES </h1>
            </div>
            <div className="d-center stack items-start">
              <Link to={"/about/timeline"} className="d-center gap-3 ">
                <h1>About</h1>
                <FaArrowRightLong
                  size={60}
                  className="text-gray-800 animate-pulse "
                />
              </Link>
              <Link to={"/projects/timeline"} className="d-center gap-3 ">
                <h1>Projects</h1>
                <FaArrowRightLong
                  size={60}
                  className="text-gray-800 animate-pulse "
                />
              </Link>
            </div>
          </div>
          <Link to={"/"} className="d-center gap-4">
            <BiUndo size={40} />
            <h2>Home</h2>
          </Link>
        </>
      }
    />
  );
}

export default CareerTimeline;
