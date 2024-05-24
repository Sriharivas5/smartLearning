import React, { useEffect, useState } from "react";
import "./Flex2.css";
import bricks from "../assets/bricks.png";
import mario from "../assets/mario.png";
import { Link } from "react-router-dom";
const Flex2 = () => {
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
      justifyContent.toLowerCase() == "center" &&
      alignItems.toLowerCase() == "center"
    ) {
      setButton(true);
    }
  }, [justifyContent, alignItems]);
  return (
    <div className="main2">
      <div className="level2">
        <h1>Level 2</h1>
      </div>
      <div className="gameContainer2">
        <div className="container2">
          <div
            className="object2"
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: `${justifyContent}`,
              alignItems: `${alignItems}`,
            }}
          >
            <img src={mario} alt="" />
          </div>
          <div className="land2">
            <img src={bricks} />
            <img src={bricks} />
            <img src={bricks} />
          </div>
        </div>

        <div className="inputContainer2">
          <div className="inputHeadings2">
            <h1>Help the mario to reach the bricks</h1>
            <h3>Use the properties like </h3>
            <h3>
              Justify-Content: <span>center, flex-start, flex-end</span>{" "}
            </h3>
            <h3>
              Align-items: <span> center, flex-start, flex-end</span>
            </h3>
          </div>

          <div className="input2">
            <div className="inputDiv2">
              <h2>Display</h2>
              <input type="text" value="Flex" readOnly />
            </div>

            <div className="inputDiv2">
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
            <div className="inputDiv2">
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
              <h1>Hurray! Level 2 completed</h1>
              <Link to="/Smart-Learning/Css/Flex/Flex3">
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

export default Flex2;
