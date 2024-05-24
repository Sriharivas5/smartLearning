import React, { useState } from "react";
import "./Positions.css";
import { Link } from "react-router-dom";
import dogGif from "../assets/dogGif.gif";
import dogFood from "../assets/dogFood.png";
const Positions = () => {
  const [positionInput, setPositionInput] = useState("");
  const [leftInput, setLeftInput] = useState("");
  const [finalLeftInput, setFinalLeftInput] = useState("0px");
  const [bottomInput, setBottomInput] = useState("");
  const [finalBottomInput, setFinalBottomInput] = useState("0px");

  const handleClick = () => {
    if (positionInput == "") {
      alert("Please fill the position input");
    } else if (positionInput.toLowerCase() == "relative") {
      setFinalLeftInput(leftInput);
      setFinalBottomInput(bottomInput);
    } else {
      alert("Please please fill the position input field with valid value");
    }
  };
  return (
    <div className="position">
      <div className="positionImage">
        <div className="parent">
          <img
            src={dogGif}
            style={{
              left: finalLeftInput,
              top: finalBottomInput,
            }}
            id="dog"
          />
          <img src={dogFood} id="dogFood" />
        </div>
      </div>
      <div className="positionInput">
        <div className="note">
          <h2>Help the dog to reach food </h2>
          <h3>Hint : use position property relative </h3>
        </div>
        <div className="positionInputChild">
          <div className="commonInputParent">
            <h2>position : </h2>
            <input
              type="text"
              value={positionInput}
              onChange={(e) => setPositionInput(e.target.value)}
              onKeyDown={(e)=>{if(e.key=="Enter"){handleClick()}}}
            />
          </div>
          <div className="commonInputParent">
            <h2>left :</h2>
            <input
              type="text"
              placeholder="left"
              onChange={(e) => setLeftInput(e.target.value)}
              value={leftInput}
              onKeyDown={(e)=>{if(e.key=="Enter"){handleClick()}}}

            />
          </div>
          <div className="commonInputParent">
            <h2>top :</h2>
            <input
              type="text"
              placeholder="top"
              onChange={(e) => setBottomInput(e.target.value)}
              value={bottomInput}
              onKeyDown={(e)=>{if(e.key=="Enter"){handleClick()}}}
             
            />
          </div>
          <button onClick={handleClick}>Submit</button>
        </div>
        <Link to="/Smart-Learning/Css/Positions/Positions2">
          <button>Next Level</button>
        </Link>
      </div>
    </div>
  );
};

export default Positions;
