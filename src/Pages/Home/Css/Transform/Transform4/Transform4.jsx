import React, { useState } from "react";
import "./Transform4.css";
import boy from '../Assets/Baby-Crawl-Cycle-unscreen.gif'
import toy from '../Assets/toy-removebg-preview.png'
const Transform1 = () => {
  const [translateX, setRotate] = useState();
  const [rotateInput, setRotateInput] = useState();

  const handleRotate = () => {
    setRotate(rotateInput);
  };
  return (
    <div className="transform">
      <div className="result1">
        <div className="resultContent">
        <h3>enter the correct transform property and its values in input field and move <br/>Boy towards Toy</h3>
        </div>
        <div className="results">
         <div className="skew">
          <h3>Boy</h3>
          <div  >
          <div className="boyimg" ><img src={boy} alt=""  style={{ transform: `${translateX}` }}/> </div>    
          </div>   
          </div>
         <div className="skew1">
         <h3>Toy</h3>
         
          
         <div className="toyimg"><img src={toy} alt="" /></div>       
       
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

        <button onClick={handleRotate}>Enter</button>
      </div>
    </div>
  );
};

export default Transform1;
