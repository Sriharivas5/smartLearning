import React from "react";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import "./Array1.css";
import { useState } from "react";
import { useEffect } from "react";
const Array1 = () => {
  const [imageClass, setImageClass] = useState("");
  const [textArea, setTextArea] = useState("");
  const [finalTextArea, setFinalTextArea] = useState("");

  const handleClick = () => {
    setFinalTextArea(textArea);
  };
  useEffect(() => {
         
    // let s1 = finalTextArea.substring(7,finalTextArea.length).replace(/ /g,"")
    // let s2 = s1.replace(/'/g,'"')
    // setFinalTextArea(finalTextArea.substring(0,7)+s2)

    if (
      finalTextArea == 'const parking =["car1","car2","car3","car4"]' ||
      finalTextArea == 'var parking =["car1","car2","car3","car4"]' ||
      finalTextArea == 'let parking =["car1","car2","car3","car4"]' ||
      finalTextArea == "const parking =['car1','car2','car3','car4']" ||
      finalTextArea == "var parking =['car1','car2','car3','car4']" ||
      finalTextArea == "let parking =['car1','car2','car3','car4']"
    ) {
      setImageClass("moveCar");
    } else {
      setImageClass("");
    }
  }, [finalTextArea]);
  return (
    <div className="array1">
      <div className="array1Image">
        <div className="array1Description">
          <h2>
            Store values <span id="arrayValues">car1 , car2 , car3 ,car4</span> in the
            array named <span id="arrayName">parking</span>
          </h2>
          <h3>To park the cars in parking space</h3>
        </div>
        <div className="array1Garage">
          <img src={car1} className={imageClass} />
          <img src={car2} className={imageClass} />
          <img src={car1} className={imageClass} />
          <img src={car2} className={imageClass} />
        </div>
      </div>
      <div className="array1Question">
        <h2>Example array : let array = [ "item1","item2","item3" ]</h2>
        <h3>
          Note : Names are caseSensitive so you need to use the same same names
          provided in left side
        </h3>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <button onClick={handleClick}>SUBMIT</button>
      </div>
    </div>
  );
};

export default Array1;
