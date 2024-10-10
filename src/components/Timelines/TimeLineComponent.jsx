import React from "react";
import Timeline from "react-elegant-timeline";
import { FaAnglesDown, FaArrowRightLong } from "react-icons/fa6";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";


function TimeLineComponent({segments,beforePage,afterPage}) {
  return (
    <div className="about-timeline d-center stack items-start bg-black text-white h-auto">
      <div className="h-screen w-full d-center stack gap-5">
        {beforePage}</div>
      <Timeline data={segments.map(e=>({...e,description:<Markdown>{e.description}</Markdown>}))} />
      <div className="h-screen w-full d-center stack d-ends py-20">
        {afterPage}
      </div>
    </div>
  );
}

export default TimeLineComponent;
