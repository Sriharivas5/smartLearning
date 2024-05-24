import React, { useState } from 'react'
import '../Javascript_index/Javascript_index.css'
import { Link } from 'react-router-dom'
const Javascript_index = () => {
    let [basic,setBasic] = useState(false)
    let [types,setTypes] = useState(false)
    let [vlc,setVlc] = useState(false)
  return (
    
    <div className='js_index_main'>
    
        <div className="basics"  >
            <h2 onClick={()=>{setBasic(!basic)}}>Basics</h2>
           {basic && < ><ul>
           <Link to={'/Smart-Learning/Js/Basics/Level1'} style={{textDecoration : "none"}}> <li>console.log</li></Link>
           <Link to={'/Smart-Learning/Js/Basics/Level2'} style={{textDecoration : "none"}}> <li>Alert</li></Link>
           <Link to={'/Smart-Learning/Js/Basics/Level3'} style={{textDecoration : "none"}}> <li>document.write</li></Link>

            </ul></>}
        </div>
        <div className="types"  >
            <h2 onClick={()=>{setTypes (!types)}}>Conditions</h2>
           {types && < ><ul>
           <Link to={'/Smart-Learning/Js/Conditions/If'} style={{textDecoration : "none"}}> <li>if/else</li></Link>
           <Link to={'/Smart-Learning/Js/Basics/Level2'} style={{textDecoration : "none"}}> <li>switch</li></Link>




            </ul></>}
        </div>

        <div className="Var-let-const"  >
            <h2 onClick={()=>{setVlc (!vlc)}}>Loops</h2>
           {vlc && < ><ul>
           <Link to={'/Smart-Learning/Js/Loops/Forloop'} style={{textDecoration : "none"}}> <li>ForLoop</li></Link>
           <Link to={'/Smart-Learning/Js/Loops/WhileLoop'} style={{textDecoration : "none"}}> <li>While Loop</li></Link>
         
             


            </ul></>}
        </div>

    </div>
  )
}

export default Javascript_index