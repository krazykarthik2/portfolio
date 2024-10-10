import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa";
import { BiCheck, BiPaperPlane } from "react-icons/bi";
import { GiPaperPlane } from "react-icons/gi";
import { IoPaperPlane } from "react-icons/io5";
import { IoIosPaperPlane, IoMdPaperPlane } from "react-icons/io";
import { PiPaperPlane, PiPaperPlaneRight } from "react-icons/pi";

const knitMessage = (name, email, mobile, message) => {
  return `${name} tried to contact you via your portfolio website\n email:${email}, mobile:${mobile},message:\n---------\n${message}\n---------\n`;
};
const sendMessageToSlack = async (message) => {
  const webhookUrl =
    "https://hooks.slack.com/services/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"; // Your Slack webhook URL

  try {
    const response = await axios.post(
      webhookUrl,
      {
        text: message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("Message sent successfully:", response.data);
      return true;
    } else {
      console.error("Failed to send message:", response.data);
      return false;
    }
  } catch (error) {
    console.error("Error sending message:", error);
    return false;
  }
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [msgSubmitted, setmsgSub] = useState([]);
  const [knit, setKnit] = useState("");
  useEffect(() => {
    setKnit(knitMessage(name.trim(), email, mobile.trim(), message.trim()));
  }, [name, email, mobile, message]);
  function handleSubmit(e) {
    e.preventDefault();
    if (msgSubmitted.length != 0 && msgSubmitted.includes(knit)) {
      alert("this message submitted already");
    } else {
      const sent = sendMessageToSlack(knit);
      if (sent) {
        setmsgSub((x) => [...x, knit]);
      }
    }
  }
  return (
    <div className="w-full contact-page h-screen d-center p-10">
      <div className="left max-w-36 d-center">
        <h1 className="min-w-96 d-center text-5xl -rotate-90">
          Let me
          <br /> contact you
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="stack gap-4 w-full border-4 border-white rounded-3xl p-5"
      >
        <div className="inputgroup">
          <label htmlFor="name">your name*</label>
          <div className="d-center w-full">
            <div className="here">&gt;</div>
            <input
              className={[name == "" ? "not-dirty" : "dirty"].join(" ")}
              required
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <label htmlFor="name" className="input-border"></label>
        </div>
        <div className="inputgroup">
          <label htmlFor="email">your email*</label>
          <div className="d-center w-full">
            <div className="here">&gt;</div>
            <input
              className={[email == "" ? "not-dirty" : "dirty"].join(" ")}
              required
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value.replaceAll(/[ ]/g, ""))}
            />
          </div>
          <label htmlFor="email" className="input-border"></label>
        </div>
        <div className="inputgroup">
          <label htmlFor="mobile">mobile number</label>
          <div className="d-center w-full">
            <div className="here">&gt;</div>
            <input
              className={[mobile == "" ? "not-dirty" : "dirty"].join(" ")}
              type="text"
              name="mobile"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <label htmlFor="mobile" className="input-border"></label>
        </div>
        <div className="txtgroup stack">
          <label htmlFor="message absolute">message *</label>
          <textarea
            className={[message == "" ? "not-dirty" : "dirty"].join(" ")}
            rows={5}
            required
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="d-center">
          <button
            type="submit"
            className="bg-white text-black h-5 rounded-full px-10 py-4 d-center"
          >
            <div className="d-center gap-3">
              {msgSubmitted.length != 0 && msgSubmitted.includes(knit) ? (
                <div> ({msgSubmitted.length}) Sent</div>
              ) : (
                <div>Send</div> 
              )}
              <PiPaperPlaneRight
                className={
                  msgSubmitted.length != 0 && msgSubmitted.includes(knit)
                    ? "duration-1000 translate-x-20"
                    : "duration-1000 translate-x-0"
                }
                size={25}
              />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
