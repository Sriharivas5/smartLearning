import React, { useState } from "react";
import "../Level2/Level2.css";
import { useNavigate } from "react-router-dom";
const Level2 = () => {
let [level2code , setLevel2code] = useState('');
let [level2Left,setLevel2Left] = useState('level2_left')
let [output_level2,setOutput_level2] = useState('')
let [level2_disabled , setLevel2_disabled] = useState(true)
let navigate3 = useNavigate()
let level2Handle = ()=>{
    if(level2code == "alert('This is Alert')" || level2code == 'alert("This is Alert")') {
        setLevel2Left('new_level2_left')
        
        setOutput_level2('You Got it Look Upside !!!')
        setTimeout(()=>alert("This is Alert"),1500)
        setLevel2_disabled(false)
    }
    else{
        setLevel2Left('new_level2_left1')
        setOutput_level2("Try Again!!!")
        setLevel2_disabled(true)
    }

}

  return (
    <div className="level2main">
      <div className={level2Left}>
        <p className="level2_left_p">{output_level2}</p>
      </div>
      <div className="level2_right">
        <div className="level2_right_top" >
          <h1>Alert</h1>
          <p>
            One useful function that's native to JavaScript is the alert()
            function. This function will display text in a dialog box that pops
            up on the screen. Before this function can work, we must first call
            the showAlert() function.
          </p>
          <h2>Syntax</h2>
          <code>alert("Message")</code>
          <p>Create an alert with the message "This is Alert"</p>
        </div>
        <div className="level2_rght_bottom">
        <textarea  type="text" className="level2text" value={level2code} onChange={(e)=>{setLevel2code(e.target.value)}}/>
        <div className="level2_btn_contrainer">
          <button onClick={level2Handle}>Run Code</button>
          <button disabled = {level2_disabled} onClick={()=>navigate3('/Smart-Learning/Js/Basics/Level3')} >Next Level</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Level2;
