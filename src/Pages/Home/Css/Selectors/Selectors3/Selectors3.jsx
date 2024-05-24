import React, { useEffect, useState } from "react";
import "./Selectors3.css";
import girPng from "../assets/girlPng.png";
import tigerEating from "../assets/tigerEating.png";
import tigerGif from "../assets/tigerGif.gif";
import hemanPng from "../assets/hemanPng.png";
import girPng2 from "../assets/girlPng2.png";
import shaggyPng from "../assets/shaggyPng.png";
import scoobyDogPng from "../assets/scoobyDogPng.png";
import { Link } from "react-router-dom";
const Selectors3 = () => {
  const [input, setInput] = useState("");
  const [changedId, setChangedId] = useState(false);
  const [finalInput, setFinalInput] = useState("");
  const [showCondition, setShowCondition] = useState(false);

  const handleCLick = () => {
    setFinalInput(input);
    setShowCondition(true);
  };
  useEffect(() => {
    finalInput == "#heMan" && setChangedId(true);
  }, [finalInput]);

  const jsxCode = `
    <h1 id='heMan'> Select this h1 tag using appropriate selector to save the girl </h1>
`;

  return (
    <div className="selectorsContainer">
      <div className="heading">
        <h1>Level 3</h1>
        <h1>{changedId}</h1>
      </div>
      <div className="selectors">
        <div className="objects">
          <img src={tigerGif} class="tiger" id={changedId && "reversedTiger"} />
          {showCondition &&
            (finalInput === "#heMan" ? (
              <img src={hemanPng} id="hemanPng" />
            ) : (
              <img src={tigerEating} id="tigerEating" />
            ))}
          <img src={girPng2} id={changedId ? "none" : "girl"} />
        </div>

        <div className="questions">
          <h3>{jsxCode}</h3>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <img src={shaggyPng} id="shaggyPng" />
              <h1>div</h1>
            </div>

            <div>
              <img src={hemanPng} id="hemanPng" />
              <h1>#heMan</h1>
            </div>

            <div>
              <img src={scoobyDogPng} id="scoobyDogPng" />
              <h1>.dog</h1>
            </div>
          </div>
          <div className="selectorsInput">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter the Selelector here"
              onKeyDown={(e) => {
                if (e.key == "Enter") handleCLick();
              }}
              readOnly={changedId && true}
            />
            <button onClick={handleCLick}>SUBMIT</button>
          </div>

          {showCondition &&
            (changedId ? (
              <div className="nextLevel">
                <h1>Hurray you saved the girl </h1>
                <Link to="/Smart-Learning/Css/Selectors/Selectors4">
                  <button>Next Level &#129034;</button>
                </Link>
              </div>
            ) : (
              <h1>
                Oh pitty you didn't select the tag properly tiger killed the
                girl
              </h1>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Selectors3;
