import React, { useEffect, useState } from "react";
import "./Selectors.css";
import girPng from "../assets/girlPng.png";
import tigerEating from "../assets/tigerEating.png";
import tigerGif from "../assets/tigerGif.gif";
import hemanPng from "../assets/hemanPng.png";
import girPng2 from "../assets/girlPng2.png";
import shaggyPng from "../assets/shaggyPng.png";
import scoobyDogPng from "../assets/scoobyDogPng.png";
import { Link } from "react-router-dom";
const Selectors = () => {
  const [input, setInput] = useState("");
  const [changedId, setChangedId] = useState(false);
  const [finalInput, setFinalInput] = useState("");
  const [showCondition, setShowCondition] = useState(false);

  const handleCLick = () => {
    setFinalInput(input);
    setShowCondition(true);
  };
  useEffect(() => {
    finalInput == "p" && setChangedId(true);
  }, [finalInput]);

  const jsxCode = `
    <p> Select this p tag using appropriate selector to save the girl </p>
`;

  return (
    <div className="selectorsContainer">
      <div className="heading">
        <h1>Level 1</h1>
      </div>
      <div className="selectors">
        <div className="objects">
          <img src={tigerGif} class="tiger" id={changedId && "reversedTiger"} />
          {showCondition &&
            finalInput === "p" && <img src={hemanPng} id="hemanPng" />}
          <img src={girPng2} id="girl" />
        </div>
        {/* <div className='eating'>
                        <img src={tigerEating} />
                    </div> */}

        <div className="questions">
          <pre>
            <h2>{jsxCode}</h2>
          </pre>

          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
              <img src={hemanPng} id="hemanPng" />
              <h1>p</h1>
            </div>

            <div>
              <img src={shaggyPng} id="shaggyPng" />
              <h1>#para</h1>
            </div>

            <div>
              <img src={scoobyDogPng} id="scoobyDogPng" />
              <h1>.para</h1>
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
            (finalInput === "p" ? (
              <div className="nextLevel">
                {" "}
                <h1>Hurray you saved the girl </h1>
                <Link to="/Smart-Learning/Css/Selectors/Selectors2">
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

export default Selectors;
