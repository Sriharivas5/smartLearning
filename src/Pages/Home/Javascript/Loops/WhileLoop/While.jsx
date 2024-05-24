import React, { useState } from "react";
import "../WhileLoop/While.css";
import giff_whie from '../../JS_Assets/YAgE.gif'
const While = () => {
  let [while_input, setWhile_input] = useState("");
  let [while_arr, setWhilearr] = useState('0');
  let whileHandler = () => {
    setWhile_input(while_input.replace(/(\r\n|\n|\r)/gm, " ") .replace(/\s+/g, " ").trim());
    if (
      while_input == "let i=0 while(i<=1) { i++ }" ||
      while_input == "var i=0 while(i<=1) { i++ }"
    ) {
      setWhilearr("58.33%");
    } else if (
      while_input == "let i=0 while(i<=2) { i++ }" ||
      while_input == "var i=0 while(i<=2) { i++ }"
    ) {
        setWhilearr("120.66%");
    } else if (
      while_input == "let i=0 while(i<=3) { i++ }" ||
      while_input == "var i=0 while(i<=3) { i++ }"
    ) {
        setWhilearr("190.99%");
    } else if (
      while_input == "let i=0 while(i<=4) { i++ }" ||
      while_input == "var i=0 while(i<=4) { i++ }"
    ) {
        setWhilearr("260.32%");
    } else if (
      while_input == "let i=0 while(i<=5) { i++ }" ||
      while_input == "var i=0 while(i<=5) { i++ }"
    ) {
        setWhilearr("330%");
    }
  };
  return (
    <div className="while_main">
      <div className="while_left">
        <div className="while_giff_container">
        <img src={giff_whie} className="while_giff" alt=""  style={{translate : while_arr}}/>
        </div>
        <div className="blocks_while">

        <div className="blocks_while_1"><h1>0</h1></div>
        <div className="blocks_while_2"><h1>1</h1></div>
        <div className="blocks_while_3"><h1>2</h1></div>
        <div className="blocks_while_4"><h1>3</h1></div>
        <div className="blocks_while_5"><h1>4</h1></div>
        <div className="blocks_while_6"><h1>5</h1></div>
        </div>
      </div>

      <div className="while_right">
        <h1>While Loop</h1>
        <p>
          The while statement creates a loop (around a code block) that is
          executed while a condition is true . The loop runs while the condition
          is true . Otherwise it stops.
        </p>
        <h2>Syntax</h2>
        <code>
          while(condition)
          {} 
        </code>
        <p>Write a while Loop with variable 'i' maximum iterations are 6</p>

        <textarea
          className="whileText"
          rows={5}
          value={while_input}
          onChange={(e) => 
            {
              setWhile_input((e.target.value))
              
            }}
        />
        <button onClick={whileHandler}>Run Code</button>
      </div>
    </div>
  );
};

export default While;
