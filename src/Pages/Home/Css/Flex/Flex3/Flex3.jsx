import React, { useEffect, useState } from "react";
import "./Flex3.css";
import bricks from "../assets/bricks.png";
import mario from "../assets/mario.png";
import { Link } from "react-router-dom";

const Flex3 = () => {
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
      justifyContent.toLowerCase() == "space-between" &&
      alignItems.toLowerCase() == "center"
    ) {
      setButton(true);
    }
  }, [justifyContent, alignItems]);
  return (
    <div className="main3">
      <div className="level3">
        <h1>Level 3</h1>
      </div>
      <div className="gameContainer3">
        <div className="container3">
          <div
            className="object3"
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
          <div className="land3">
            <div className="left3">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
            <div className="right3">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
          </div>
        </div>
        <div className="inputContainer3">
          <div className="inputHeadings3">
            <h1>Help the both the mario's to reach their bricks</h1>
            <h3>Use the properties like </h3>
            <h3>
              Justify-Content:{" "}
              <span> space-between, space-evenly, space-around</span>
            </h3>
            <h3>
              Align-items: <span>center, flex-start, flex-end</span>
            </h3>
          </div>

          <div className="input3">
            <div className="inputDiv3">
              <h2>Display</h2>
              <input type="text" value="Flex" readOnly />
            </div>

            <div className="inputDiv3">
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
            <div className="inputDiv3">
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
              <h1>Hurray! Level 3 completed</h1>
              <Link to="/Smart-Learning/Css/Flex/Flex4">
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

export default Flex3;
