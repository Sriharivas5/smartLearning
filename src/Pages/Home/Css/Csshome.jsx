import React from 'react'
import { Link } from 'react-router-dom'
import "./Csshome.css"
const Csshome = () => {
  return (
    <div className='cssHome'>
      <div className="headingCss">
        <h1>Here Are Some Css Concepts That You Can Learn By Playing Games Select One Which You Want</h1>
      </div>
      <div className='blur'>
        <Link to='/Smart-Learning/Css/Flex/FlexIntro'><h1>Flex</h1></Link>
        <Link to='/Smart-Learning/Css/Transform/Transform1'><h1>Transform</h1></Link>
        <Link to='/Smart-Learning/Css/Selectors/SelectorsIntro'><h1>Selectors</h1></Link>
        {/* <Link to='/Smart-Learning/Css/Selectors/Selectors1'><h1>Box Model</h1></Link> */}
        {/* <Link to='/Smart-Learning/Css/Selectors/Selectors1'><h1>Fonts</h1></Link> */}
        <Link to='/Smart-Learning/Css/Positions/PositionIntro'><h1>Position</h1></Link>
        <Link to='/Smart-Learning/Css/Selectors/Selectors1'><h1>Grid</h1></Link>
        <Link to='/Smart-Learning/Css/Selectors/Selectors1'><h1>Pseudo-Class</h1></Link>
        <Link to='/Smart-Learning/Css/Selectors/Selectors1'><h1>Pseudo-Element</h1></Link>

      </div>
    </div>
  )
}

export default Csshome
