import React, { useState } from "react";
import "./Transform2.css";
// import bird from "../Assets/birds_PNG42.png";
import { Link } from "react-router-dom";

const Transform1 = () => {
  const [skew, setRotate] = useState();
  const [rotateInput, setRotateInput] = useState();

  const handleRotate = () => {
    setRotate(rotateInput);
  };
  return (
    <div className="transform">
      <div className="result1">
        <div className="resultContent">
        <h3>enter the correct transform property and its values in input field and match <br/>Box-B with Box-A</h3>
        </div>
        <div className="results">
         <div className="skew">
          <h3>Box-A</h3>
          <div className="skewbox1"> </div>       
          </div>
         <div className="skew">
         <h3>Box-B</h3>
         <div style={{ transform: `${skew}` }}>
          
         <div className="skewbox2"> </div>       
        </div>
         </div>
         
        </div>
      </div>
      <div className="rotate">
        <div className="rotateCont">
          <h3>Enter the valid  transform properties in CSS </h3>
          <h4></h4>
        </div>
        <div className="rightContent">
          <h2 htmlFor="">transform: </h2>
          <input
            type="text"
            value={rotateInput}
            onChange={(e) => setRotateInput(e.target.value)}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") handleRotate();
            }}
          />
        </div>


        <div className="transformButtons">
          <button onClick={handleRotate}>Enter</button>
          <Link to='/Smart-Learning/Css/Transform/Transform3'><button>Next Level &#129034;</button></Link>
        </div>      </div>
    </div>
  );
};

export default Transform1;
