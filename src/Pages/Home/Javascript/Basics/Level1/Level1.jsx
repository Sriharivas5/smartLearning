import React, { useState } from 'react'
import '../Level1/Level1.css'
import { useNavigate } from 'react-router-dom'
const Level1 = () => {
  let [code,setCode] = useState('')
  let [output,setOutput] = useState('Write your code...')
  let [left_class,setLeft_class] = useState('left')
  let [disabled,setDisabled] = useState(true)
  let navigate = useNavigate()
  let handleRun = ()=>{
    if(code== 'console.log("Hello World")' || code=="console.log('Hello World')"){
    setLeft_class('new_left')
    console.log("success")
    setOutput('Hello World')
    setDisabled(false)
  
  }
  else{
    setLeft_class("new_left1")
    console.log("Fail")
    setOutput("Try Again......")
  }}
  return (
    <div className='level1_main'>
        <div className={left_class}>
          <p className='output'>{output}</p>
        </div>
        <div className="right">
            <div className="right-top">
                <h1>console.log</h1>
                <p>JavaScript's console. log() function is used to print any variables that have been defined in the program or to display any other message to the user. Syntax: </p>
                <h2>syntax</h2>
                <code>console.log("message");</code>
                <p>Write the code  to display "Hello World" </p>
            </div>
            <div className="right-bottom">
              <textarea type="text" value={code} onChange={(e)=>{setCode(e.target.value)}}  className='level1-text' />
              <div className="btn-container">
                <button onClick={handleRun}>Run Code</button>
                <button onClick={()=>{navigate('/Smart-Learning/Js/Basics/Level2')}} disabled={disabled}>Next Level</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Level1