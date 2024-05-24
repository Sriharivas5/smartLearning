import React, { useEffect, useState } from "react";
import "./Flex4.css";
import bricks from "../assets/bricks.png";
import mario from "../assets/mario.png";
import powerUp from "../assets/pinkPowerUp.png";

import { Link } from "react-router-dom";

const Flex4 = () => {
  const [justifyContent, setJustifyContent] = useState("");
  const [alignItems, setAlignItems] = useState("");

  const [justifyContentInput, setJustifyContentInput] = useState("");

  const [alignItemsInput, setAlignItemsInput] = useState("");
  const [button, setButton] = useState(false);

  const handleClick = () => {
    setJustifyContent(justifyContentInput);
    setAlignItems(alignItemsInput);
  };
  useEffect(() => {
    if (
      justifyContent.toLowerCase() == "space-around" &&
      alignItems.toLowerCase() == "flex-end"
    ) {
      setButton(true);
    }
  }, [justifyContent, alignItems]);
  return (
    <div className="main4">
      <div className="level4">
        <h1>Level 4</h1>
      </div>
      <div className="gameContainer4">
        <div className="container4">
          <div
            className="object4"
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: `${justifyContent}`,
              alignItems: `${alignItems}`,
            }}
          >
            <img src={mario} />
            <img src={mario} />
          </div>
          <div className="land4">
            <div className="left4">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
            <div className="right4">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
          </div>
          <div className="powerUp">
            <img src={powerUp} />
            <img src={powerUp} />
          </div>
        </div>
        <div className="inputContainer4">
          <div className="inputHeadings4">
            <h1>
              Mario's got tired take them to <span>Mushrooms</span>
            </h1>
            <h3>Use the properties like </h3>
            <h3>Justify-Content: <span className="italic">space-between, space-evenly, space-around</span></h3>
            <h3>Align-items: <span className="italic">center, flex-start, flex-end</span></h3>
          </div>

          <div className="input4">
            <div className="inputDiv4">
              <h2>Display</h2>
              <input type="text" value="Flex" readOnly />
            </div>

            <div className="inputDiv4">
              <h2>Justify-Content</h2>
              <input
                type="text"
                value={justifyContentInput}
                onChange={(e) => setJustifyContentInput(e.target.value)}
                placeholder="flex-start"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleClick();
                }}
              />
            </div>
            <div className="inputDiv4">
              <h2> Align-Items </h2>
              <input
                type="text"
                value={alignItemsInput}
                onChange={(e) => setAlignItemsInput(e.target.value)}
                placeholder="flex-start"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleClick();
                }}
              />
            </div>
          </div>

          <button onClick={handleClick}>Submit</button>

          {button ? (
            <div id="level">
              <h1>Hurray! Level 4 completed</h1>
              <Link to="/Smart-Learning/Css/Flex/Flex5">
                <button id="nextLevel">Next Level &#129034;</button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Flex4;
