import React, { useEffect, useState } from "react";
import "./Flex6.css";
import bricks from "../assets/bricks.png";
import mario from "../assets/mario.png";
import powerUp from "../assets/coin.png";

import { Link } from "react-router-dom";

const Flex6 = () => {
  const [justifyContent, setJustifyContent] = useState("");
  const [alignItems, setAlignItems] = useState("");
  const [flexDirection, setFlexDirection] = useState("");

  const [justifyContentInput, setJustifyContentInput] = useState("");
  const [alignItemsInput, setAlignItemsInput] = useState("");
  const [flexDirectionInput, setFlexDirectionInput] = useState("");

  const [button, setButton] = useState(false);

  const handleClick = () => {
    setJustifyContent(justifyContentInput);
    setAlignItems(alignItemsInput);
    setFlexDirection(flexDirectionInput);
  };
  useEffect(() => {
    if (
      justifyContent.toLowerCase() == "space-between" &&
      alignItems.toLowerCase() == "center" &&
      flexDirection.toLowerCase() == "row-reverse"
    ) {
      setButton(true);
    }
  }, [justifyContent, alignItems, flexDirection]);
  return (
    <div className="main6">
      <div className="level6">
        <h1>Level 6</h1>
      </div>
      <div className="gameContainer6">
        <div className="container6">
          <div
            className="object6"
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: `${justifyContent}`,
              alignItems: `${alignItems}`,
              flexDirection: `${flexDirection}`,
            }}
          >
            <img src={mario} id="redMario" />
            <img src={mario} id="blueMario" />
          </div>
          <div className="land6">
            <div className="left6" id="blueLand">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
            <div className="right6" id="redLand">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
          </div>
        </div>
        <div className="inputContainer6">
          <div className="inputHeadings6">
            <h1>Help the mario's to reach the respected coloured blocks</h1>
            <h3>Use the properties like </h3>
            <h3>
              Justify-Content:{" "}
              <span> space-between, space-evenly, space-around </span>
            </h3>
            <h3>
              Align-items: <span> center, flex-start, flex-end</span>
            </h3>
            <h3>
              Flex-direction :{" "}
              <span> column, column-reverse, row ,row-reverse</span>
            </h3>
          </div>

          <div className="input6">
            <div className="inputDiv6">
              <h2>Display</h2>
              <input type="text" value="Flex" readOnly />
            </div>

            <div className="inputDiv6">
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
            <div className="inputDiv6">
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
            <div className="inputDiv6">
              <h2> Flx-direction </h2>
              <input
                type="text"
                value={flexDirectionInput}
                onChange={(e) => setFlexDirectionInput(e.target.value)}
                placeholder="row"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleClick();
                }}
              />
            </div>
          </div>

          <button onClick={handleClick}>Submit</button>

          {button ? (
            <div id="level">
              <h1>Hurray! Level 6 completed</h1>
              <Link to="/Smart-Learning/Css/Flex/Flex7">
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

export default Flex6;
