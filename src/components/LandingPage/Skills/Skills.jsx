import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
const axios = require("axios");

const query = `
{
  matchedUser(username: "YOUR_USERNAME") {
    username
    submitStats: submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }
}
`;

function Skills() {
  const [leetData, setLeetData] = useState(null);
  window.lt = leetData;
  useEffect(() => {
    axios
      .get("https://leetcode.com/graphql", { query })
      .then((response) => {
        setLeetData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="w-full h-screen d-center stack">
      <div className="top h-full"></div>
      <div className="end d-ends w-full px-10">
        <Link
          to="/academia"
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
              /karthikkrazy
              [<span>
                {
                  leetData?.data.matchedUser.submitStats.acSubmissionNum.find(
                    (e) => e.difficulty == "All"
                  ).count
                }
              </span>]
              
            </div>
          </div>
          <div className="d-center justify-between w-full">
            <div className="stack text-sm">
              <div>Easy</div>
              <div>
                {
                  leetData?.data.matchedUser.submitStats.acSubmissionNum.find(
                    (e) => e.difficulty == "Easy"
                  ).count
                }
              </div>
            </div>
            <div className="stack text-sm">
              <div>Medium</div>
              <div>
                {
                  leetData?.data.matchedUser.submitStats.acSubmissionNum.find(
                    (e) => e.difficulty == "Medium"
                  ).count
                }
              </div>
            </div>
            <div className="stack text-sm">
              <div>Hard</div>
              <div>
                {
                  leetData?.data.matchedUser.submitStats.acSubmissionNum.find(
                    (e) => e.difficulty == "Hard"
                  ).count
                }
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Skills;
