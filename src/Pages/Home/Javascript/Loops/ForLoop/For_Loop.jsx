import React, { useEffect, useState } from "react";
import "../ForLoop/For_Loop.css";
import giff from "../../JS_Assets/YAgE.gif";
import { useNavigate } from "react-router-dom";
const For_Loop = () => {
  let [for_input, setForinput] = useState("");
  let [for_value, setFor_value] = useState("0px");
  let [fornext,setFornext] = useState(true)
  let fornavigate = useNavigate()
  // let [flag,setFlag] = useState(false)

  let forHandler = () => {
    if (for_input == "for(let i=0;i<=1;i++)") {
      // setFlag(true)
      
      setFor_value("58.33%");
    }
    else if(for_input == "for(let i=0;i<=0;i++)"){
        setFor_value("0%");

    }
    else if(for_input == "for(let i=0;i<=2;i++)"){
        setFor_value("116.66%");

    }
    else if(for_input == "for(let i=0;i<=3;i++)"){
        setFor_value("200.99%");

    }
    else if(for_input == "for(let i=0;i<=4;i++)"){
        setFor_value("270.32%");

    }
    else if(for_input == "for(let i=0;i<=5;i++)"){
        setFor_value("350%");
        setFornext(false);
        

    }

  };
  return (
    <div className="for-loop_main">
      <div className="for-loop_left">
        <div className="giff_content">
          <img
            src={giff}
            alt=""
            className="giff_img"
            style={{ translate: for_value }}
          />
          <div className="mainOne">
            <div className="one">
                <h1>0</h1>
            </div>
            <div className="two">
                <h1>1</h1>
            </div>
            <div className="three">
            <h1>2</h1>

            </div>
            <div className="four">
            <h1>3</h1>

            </div>
            <div className="five">
            <h1>4</h1>

            </div>
            <div className="six">
            <h1>5</h1>

            </div>
          </div>
        </div>
      </div>
      <div className="for-loop_right">
        <h1>For Loop</h1>
        <p>
          A for loop repeats until a specified condition evaluates to false. The
          JavaScript for loop is similar to the Java and C for loop. A for
          statement looks as follows: js. for (initialization; condition;
          afterthought) statement.
        </p>
        <h2>Syntax</h2>
        <code>for(initialization; condition; increment/decrement)</code>
        <p>Write for loop for the animal to reach the position from 0 to 5 ;</p>
        <textarea
          type="text"
          className="text_loop"
          value={for_input}
          onChange={(e) => setForinput(e.target.value)}
        />
        <button onClick={forHandler}>Run Code </button>
        <button onClick={()=>fornavigate('/Smart-Learning/Js/Loops/WhileLoop')} disabled = {fornext}>Next Level</button>
        {/* <textarea name="" ></textarea> */}
      </div>
    </div>
  );
};

export default For_Loop;
