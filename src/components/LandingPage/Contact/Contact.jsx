import React, { useState } from "react";
import "./Contact.css";
function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="w-full contact-page h-screen d-center p-10">
      <div className="left max-w-36 d-center">
        <h1 className="min-w-96 d-center text-5xl -rotate-90">Let me<br/> contact you</h1>
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
            <div className="input-border"></div>
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
            <div className="input-border"></div>
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
            <div className="input-border"></div>
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
      </form>
    </div>
  );
}

export default Contact;
