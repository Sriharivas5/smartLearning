import React, { useState } from 'react'
import '../Level3/Level3.css'
import document from '../../JS_Assets/document.write.png'
const Level3 = () => {
  let [level3_left,setLevel3_left] = useState('level3_left');
  let [level3_code,setLevel3_code] = useState('')
  let [level3_output,setLevel3_output] = useState('Write Code...')
  let [visibility,setVisibility] = useState('left_img')
  let handleLevel3 = ()=>{
        if(level3_code=="document.write('Hello World')" || level3_code=='document.write("Hello World")'){
          setLevel3_left('level3_new');
          setLevel3_output("You got it Look Here")
          setVisibility('')

        }
        else{
          setLevel3_left('level3_new')
          setLevel3_output("Try Again")
          setVisibility('hidden')

        }
  }
  return (
    <div className="level3main">
        <div className={level3_left}>
          
          <p className='para_level3'>{level3_output}</p>
          <img src={document} alt=""  className={visibility} />
        </div>
        <div className="level3_right">
          <div className="level3_right_top">
            <h1>Document.write</h1>
            <p>write in JavaScript is a function that is used to display some strings in the output of HTML web pages (Browser window). We know that in JavaScript, a name followed by parentheses "( )" is known as a method or a function. So, document. write in javascript is a method in JavaScript to display text in the browser window.</p>
            <h2>Syntax</h2>
            <code>document.write("Hello World!")</code>
            <p>Write a code to print Helo World using document.write()</p>
          </div>
          <div className="level3_right_bottom">
          <textarea  value={level3_code} onChange={(e)=>setLevel3_code(e.target.value)} />


          <button onClick={handleLevel3}>Run Code</button>
        </div>
        </div> 

    </div>
  )
}
export default Level3