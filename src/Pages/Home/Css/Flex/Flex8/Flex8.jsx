import React, { useEffect, useState } from "react";
import "./Flex8.css";
import bricks from "../assets/bricks.png";
import mario from "../assets/mario.png";
import powerUp from "../assets/pinkPowerUp.png";
import powerUpRed from "../assets/redPowerUp.png";

import { Link } from "react-router-dom";

const Flex8 = () => {
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
      alignItems.toLowerCase() == "flex-end" &&
      flexDirection.toLowerCase() == "column-reverse"
    ) {
      setButton(true);
    }
  }, [justifyContent, alignItems, flexDirection]);
  return (
    <div className="main8">
      <div className="level8">
        <h1>Level 8</h1>
      </div>
      <div className="gameContainer8">
        <div className="container8">
          <div
            className="object8"
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
            <img src={mario} id="yellowMario" />
          </div>
          {/* <div className="land8" >
                        <div className="left8" id='blueLand'>
                            <img src={bricks} />
                            <img src={bricks} />
                            <img src={bricks} />
                        </div>
                        <div className="right8" id='redLand'>
                            <img src={bricks} />
                            <img src={bricks} />
                            <img src={bricks} />
                        </div>
                    </div> */}
          <div className="powerUp8">
            <img src={powerUp} id="powerUpGreen" />
            <img src={powerUp} id="powerUpPurple" />
            <img src={powerUpRed} id="powerUpRed" />
          </div>
        </div>
        <div className="inputContainer8">
          <div className="inputHeadings8">
            <h1>Help the mario's to reach the respected coloured blocks</h1>
            <h3>Use the properties like </h3>
            <h3>Justify-Content: <span>space-between, space-evenly, space-around</span></h3>
            <h3>Align-items: center, <span>flex-start, flex-end</span></h3>
            <h3>Flex-direction : <span>column, column-reverse, row ,row-reverse</span></h3>
          </div>

          <div className="input8">
            <div className="inputDiv8">
              <h2>Display</h2>
              <input type="text" value="Flex" readOnly />
            </div>

            <div className="inputDiv8">
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
            <div className="inputDiv8">
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
            <div className="inputDiv8">
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
              <h1>Hurray! your flexbox tasks completed</h1>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Flex8;
