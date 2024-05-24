import React, { useState } from 'react'
import '../If/If_Condition.css'
import main_img  from  '../../JS_Assets/38137875.jpg'
import chocolate from '../../JS_Assets/pngwing.com.png'
import icecream1 from '../../JS_Assets/icecream.png'
const If_Condition = () => {
    let string='if(condition){block}'
    let curl_if1 = "{"
    let curl_if2 = "}"
    let [if_input,setIfinput] = useState('')
    let [choco,setChoco] = useState('')
    let [icecream,setIcecream] = useState('')

    let handleIf = ()=>{
        if(if_input == "snack=='Chocolate'" || if_input == 'snack=="Chocolate"'){
            setChoco('-250%')
        }
        else if(if_input == "snack=='Icecream'" || if_input == 'snack=="Icecream"'){
            setIcecream('-250%')
            
        }
        else{
            alert("Choose the correct one")
        }
    }
  return (
    <div className='if_main' >
        <div className="if_left">

            <img src={main_img} alt="" className='main_img' />
            <div className="images_if">
                <img src={chocolate} alt="" style={{translate : choco  }} />
                
                <img src={icecream1} alt="" style={{translate : icecream  }}  />
            </div>
            {/* <p>Hi</p> */}
        </div>
        <div className="if_right">
            <h1>If else Statement</h1>
            <p>The if/else statement executes a block of code if a specified condition is true.</p>
            <h2>Syntax</h2>
            <p>{string}</p>
            <p> Assume " there is a snack variable the value is inside snack variable either Chocolate or Icecream " </p>
            <p>  if( <input type="text" value={if_input} onChange={(e)=>setIfinput(e.target.value)}/> ) <br /> {curl_if1}  <br /> icecream or chocolate  <br /> {curl_if2}</p>
            
            <button onClick={handleIf}>Run Code</button>

          
        </div>

        
    </div>
  )
}

export default If_Condition