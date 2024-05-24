import React from "react";
import { useNavigate } from "react-router-dom";
import "../Javascript/Javascript.css";
const Javascript = () => {
  const navigate = useNavigate();
  let handleNav = () => {
    navigate("/Smart-Learning/Js/Index");
  };

  return (
    <div className="main1">
      <h1>Introduction</h1>
      <p>
        JavaScript is a dynamic programming language primarily used for adding
        interactivity to web pages. Its versatility extends to server-side
        development, mobile apps, and more. With a syntax resembling C-style
        languages, JavaScript's event-driven nature and vast ecosystem of
        libraries make it a cornerstone of modern web development.
      </p>

      <button onClick={handleNav}>Let's Begin</button>
    </div>
  );
};

export default Javascript;
