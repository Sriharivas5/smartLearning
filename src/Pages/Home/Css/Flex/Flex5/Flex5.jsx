import React, { useEffect, useState } from "react";
import "./Flex5.css";
import bricks from "../assets/bricks.png";
import mario from "../assets/mario.png";
import powerUp from "../assets/coin.png";

import { Link } from "react-router-dom";

const Flex5 = () => {
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
      justifyContent.toLowerCase() == "space-around" &&
      alignItems.toLowerCase() == "flex-end" &&
      flexDirection.toLowerCase() == "column"
    ) {
      setButton(true);
    }
  }, [justifyContent, alignItems,flexDirection]);
  return (
    <div className="main5">
      <div className="level5">
        <h1>Level 5</h1>
      </div>
      <div className="gameContainer5">
        <div className="container5">
          <div
            className="object5"
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: `${justifyContent}`,
              alignItems: `${alignItems}`,
              flexDirection: `${flexDirection}`,
            }}
          >
            <img src={mario} />
            <img src={mario} />
          </div>
          <div className="land5">
            <div className="left5">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
            <div className="right5">
              <img src={bricks} />
              <img src={bricks} />
              <img src={bricks} />
            </div>
          </div>
        </div>
        <div className="inputContainer5">
          <div className="inputHeadings5">
            <h1>Help the mario to reach the blocks</h1>
            <h3>Use the properties like </h3>
            <h3>Justify-Content: <span className="italic">space-between, space-evenly, space-around</span></h3>
            <h3>Align-items: <span>center, flex-start, flex-end</span></h3>
            <h3>Flex-direction : <span>column, column-reverse, row ,row-reverse</span></h3>
          </div>

          <div className="input5">
            <div className="inputDiv5">
              <h2>Display</h2>
              <input type="text" value="Flex" readOnly />
            </div>

            <div className="inputDiv5">
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
            <div className="inputDiv5">
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
            <div className="inputDiv5">
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
              <h1>Hurray! Level 5 completed</h1>
              <Link to="/Smart-Learning/Css/Flex/Flex6">
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

export default Flex5;
