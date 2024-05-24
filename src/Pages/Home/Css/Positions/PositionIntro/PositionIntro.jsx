import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../../../Components/ScrollToTop/ScrollToTop";
import "./PositionIntro.css";

const PositionIntro = () => {


  const accessRelativeData = "div{ position :relative , left: 100px } " ;
  const accessAbsoluteData = "div{ position :absolute , left: 100px } " ;


  return (
    <div className="PositionIntro">
      <div className="positionHeading">
        <h1>What are positions</h1>
      </div>
      <div className="positionIntroHeader">
        <h2>
          The CSS position property is used to specify where an element is
          displayed on the page. When paired with the the top, right, bottom,
          and left CSS properties, the position property determines the final
          location of the element.
        </h2>
        <h3> Basically there are five different position values :</h3>
        <h3>&#8594; static</h3>
        <h3>&#8594; relative</h3>
        <h3>&#8594; absolute</h3>
        <h3>&#8594; fixed</h3>
        <h3>&#8594; sticky</h3>
        <div className="buttonContainer">
          <Link to="/Smart-Learning/Css/Positions/Positions1">
            <button id="flexStart">START GAME</button>
          </Link>
        </div>
      </div>
      <div className="examplePositionDescription">
        <div className="examplePosition">
          <div className="exampleSelctorHeading">
            <h2> Static </h2>
          </div>
          <div className="positionContainer">
            <div className="positionBox">div</div>
          </div>
        </div>
        <div className="intro">
          <div className="positionintroContent">
            <h4>
              Consider above example HTML elements are positioned static by
              default.
            </h4>
            <h4>
              &#8594; Static positioned elements are not affected by the top,
              bottom, left, and right properties.
            </h4>
            <h4>
              &#8594; An element with position: static; is not positioned in any
              special way; it is always positioned according to the normal flow
              of the page:
            </h4>
          </div>
        </div>
        <div className="examplePosition">
          <div className="exampleSelctorHeading">
            <h2> Relative :</h2>
          </div>
          <div className="positionContainer alignCenter" >
            <div className="positionBox" >div</div>
          </div>
          <div className="positionContainer alignCenter" >
            <div className="positionBox alignRelative" >div</div>
          </div>
        </div>
        <div className="intro">
          <div className="positionintroContent">
            <h4>
              Consider above example in the first one we placed it center using flex properties
            </h4>
            <h4>
              &#8594; An element with position: relative is positioned relative
              to its normal position.
            </h4>
            <h4>
              &#8594;Setting the top, right, bottom, and left properties of a
              relatively-positioned element will cause it to be adjusted away
              from its normal position.
            </h4>
            <h4>
              &#8594;Lets  move it's position using position relative property
            </h4>
            <h4>
              &#8594;Second one will be the output for below code
            </h4>
          </div>
          <div className="positionIntropoints">
            <h4> {accessRelativeData}</h4>
          </div>
        </div>
        <div className="examplePosition">
          <div className="exampleSelctorHeading">
            <h2> Absolute :</h2>
          </div>
          <div className="positionContainer alignCenter" >
            <div className="positionBox" >div</div>
          </div>
          <div className="positionContainer alignCenter" >
            <div className="positionBox alignAbsolute" >div</div>
          </div>
        </div>
        <div className="intro">
          <div className="positionintroContent">
            <h4>
              Consider above example in the first one we placed it center using flex properties
            </h4>
            <h4>
              &#8594; An element with position: absolute is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
            </h4>
            <h4>
              &#8594;However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
            </h4>
            <h4>
              &#8594;Like relative we can use left right top bottom for it 
            </h4>
            <h4>
              &#8594;Lets  move it's position using position absolute property
            </h4>
            <h4>
              &#8594;Second one will be the output for below code
            </h4>
          </div>
          <div className="positionIntropoints">
            <h4> {accessAbsoluteData}</h4>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <Link to="/Smart-Learning/Css/Positions/Positions1">
          <button id="flexStart">START GAME</button>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default PositionIntro;
