import React, { useEffect, useRef } from "react";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Header from "../Header/Header";
import Socials from "../utils/Socials/Socials";
import ShareBtn from "../utils/ShareBtn/ShareBtn";
function onScroll(e){
  console.log(e)
}
function smoothScrollTo(el,target, duration) {
  const start = el.scrollTop;
  const change = target - start;
  const startTime = performance.now();

  function animateScroll(timestamp) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    el.scrollTo(0, start + change * easeInOutQuad(progress));

    if (elapsed < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  }

  window.requestAnimationFrame(animateScroll);
}

function LandingPage({page}) {
  const scrollRef = useRef(null)
  useEffect(()=>{
    if (scrollRef && scrollRef.current){
      smoothScrollTo(scrollRef.current,((page-1)/5)*scrollRef.current.scrollHeight,500)
    }
  },[page])
  useEffect(()=>{
    window.addEventListener("scrollend",onScroll)
    return ()=>{
      window.removeEventListener("scrollend",onScroll)
    }
  },[])
  return (
    <>
      <Header style={{ height: "10vh" }} />
      <div className="flex overflow-hidden bg-black text-white">
          <div className="left-bar stack justify-between items-center ">
            <div className="top nothing"></div>
            <Socials />
            <ShareBtn
              title={"Share karthikkrazy"}
              text={"Share the work of Karthik"}
              url={window.location.origin}
            />
        </div>
        <div className="w-full overflow-y-scroll overflow-hidden"
          ref={scrollRef}
        style={{ height: "90vh" }}>
          <div
            className="w-full stack d-center"
            style={{ height: `${5 * 90}vh` }}

          >
            <Home />
            <About />
            <Contact />
            <Projects />
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
