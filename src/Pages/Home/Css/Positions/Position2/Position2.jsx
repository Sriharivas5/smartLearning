import React, { useState } from "react";
import "./Position2.css";
import dogGif from "../assets/dogGif.gif";
import dogFood from "../assets/dogFood.png";
const Position2 = () => {
  const [positionRealtiveInput, setPositionRealtiveInput] = useState("");
  const [positionAbsoluteInput, setPositionAbsoluteInput] = useState("");

  const [leftInput, setLeftInput] = useState("");
  const [finalLeftInput, setFinalLeftInput] = useState("0px");
  const [bottomInput, setBottomInput] = useState("");
  const [finalBottomInput, setFinalBottomInput] = useState("0px");

  const [leftBoyInput, setLeftBoyInput] = useState("");
  const [finalLeftBoyInput, setFinalLeftBoyInput] = useState("0px");
  const [bottomBoyInput, setBottomBoyInput] = useState("");
  const [finalBottomBoyInput, setFinalBottomBoyInput] = useState("0px");

  const handleClick = () => {
    if (positionRealtiveInput == "" || positionAbsoluteInput == "") {
      alert("Please fill the position input field");
    } else if (
      positionRealtiveInput.toLowerCase() == "relative" &&
      positionAbsoluteInput.toLowerCase() == "absolute"
    ) {
      setFinalLeftInput(leftInput);
      setFinalBottomInput(bottomInput);
      setFinalLeftBoyInput(leftBoyInput),
        setFinalBottomBoyInput(bottomBoyInput);
    } else {
      alert("Please enter apropriate position values");
    }
  };
  return (
    <div className="position2">
      <div className="positionImage2">
        <div className="parent2">
          <div
            id="boy2"
            style={{
              left: finalLeftBoyInput,
              top: finalBottomBoyInput,
            }}
          >
            <img
              src={dogGif}
              style={{
                left: finalLeftInput,
                top: finalBottomInput,
              }}
              id="dog2"
            />
          </div>
          <img src={dogFood} id="dogFood2" />
        </div>
      </div>
      <div className="positionInput">
        <div className="positionInputHeading">
          <h2>
            Help the dog to reach the food along with boy , now you can use both
            properties relative and absolute
          </h2>
          <h3>
            Hint : Assume boy as parent and dog as child ,enjoy the fun by
            feeding dog{" "}
          </h3>
        </div>
        <div className="positionInputContainer2">
          <div className="positionInputRelativeChild2">
            <div className="commonInputParent2Heading">
              <h2>Boy(Parent)</h2>
            </div>
            <div className="commonInputParent2">
              <h2>position : </h2>
              <input
                type="text"
                value={positionRealtiveInput}
                onChange={(e) => setPositionRealtiveInput(e.target.value)}
              />
            </div>
            <div className="commonInputParent2">
              <h2>left :</h2>
              <input
                type="text"
                placeholder="left relative"
                onChange={(e) => setLeftBoyInput(e.target.value)}
                value={leftBoyInput}
              />
            </div>
            <div className="commonInputParent2">
              <h2>top :</h2>
              <input
                type="text"
                placeholder="top"
                onChange={(e) => setBottomBoyInput(e.target.value)}
                value={bottomBoyInput}
              />
            </div>
          </div>
          <div className="positionInputAbsolutChild2">
            <div className="commonInputParent2Heading">
              <h2>Dog(Child)</h2>
            </div>
            <div className="commonInputParent2">
              <h2>position : </h2>
              <input
                type="text"
                value={positionAbsoluteInput}
                onChange={(e) => setPositionAbsoluteInput(e.target.value)}
              />
            </div>
            <div className="commonInputParent2">
              <h2>left :</h2>
              <input
                type="text"
                placeholder="left"
                onChange={(e) => setLeftInput(e.target.value)}
                value={leftInput}
              />
            </div>
            <div className="commonInputParent2">
              <h2>top :</h2>
              <input
                type="text"
                placeholder="top"
                onChange={(e) => setBottomInput(e.target.value)}
                value={bottomInput}
              />
            </div>
          </div>
        </div>
        <div className="positionInputButton">
          <button onClick={handleClick}>Submit </button>
        </div>
      </div>
    </div>
  );
};

export default Position2;
