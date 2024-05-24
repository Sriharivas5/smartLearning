import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../../../../../Components/ScrollToTop/ScrollToTop";
import "./SelectorsIntro.css";

const SelectorsIntro = () => {
  const divData = "<h1> Heading  </h1>";
  const accessDivData = "h1{ css code will come's here }";

  const classdata = '<h1 class="head"> Heading </h1>';
  const accessClassData = ".head{ css code will come here }";

  const idData = '<h1 id="head"> Heading </h1>';
  const accessIdData = "#head{ css code will come here }";
  return (
    <div className="selectorsIntro">
      <div className="headindSelector">
        <h1>What is Selector</h1>
      </div>
      <div className="selectorIntroHeader">
        <h2>
          A CSS selector is the first part of a CSS Rule. It is a pattern of
          elements and other terms that tell the browser which HTML elements
          should be selected to have the CSS property values inside the rule
          applied to them
        </h2>
        <h3>&#8594; We can select html elemts by three types</h3>
        <h3>&#8594; By tag name</h3>
        <h3>&#8594; By class name</h3>
        <h3>&#8594; By id name</h3>
        <div className="buttonContainer">
          <Link to="/Smart-Learning/Css/Selectors/Selectors1">
            <button id="flexStart">START GAME</button>
          </Link>
        </div>
      </div>
      <div className="exampleSelectorDescription">
        <div className="exampleSelector">
          <div className="exampleSelctorHeading">
            <h2> Example :</h2>
          </div>
          <div className="selectorContainer">
            <h1>{divData}</h1>
          </div>
        </div>
        <div className="intro">
          <div className="selectorintroContent">
            <h4>Consider above example if we want to apply css to the h1</h4>
            <h4>
              &#8594; For that wee need to acces the html element let's access
              it by using tag name
            </h4>
            <h4>&#8594; Let's access the h1</h4>
          </div>
          <div className="selectorIntropoints">
            <h4> {accessDivData}</h4>
          </div>
        </div>
        <div className="exampleSelector">
          <div className="exampleSelctorHeading">
            <h2> Example :</h2>
          </div>
          <div className="selectorContainer">
            <h1>{classdata}</h1>
          </div>
        </div>
        <div className="intro">
          <div className="selectorintroContent">
            <h4>
              Consider above example we can access above h1 in another way also{" "}
            </h4>
            <h4>
              &#8594; For that wee need to acces the html element by using class
              name
            </h4>
            <h4>&#8594; Let's access the h1 by using class name</h4>
          </div>
          <div className="selectorIntropoints">
            <h4> {accessClassData}</h4>
          </div>
        </div>
        <div className="exampleSelector">
          <div className="exampleSelctorHeading">
            <h2> Example :</h2>
          </div>
          <div className="selectorContainer">
            <h1>{idData}</h1>
          </div>
        </div>
        <div className="intro">
          <div className="selectorintroContent">
            <h4>
              Consider above example we can access above h1 in another way also
            </h4>
            <h4>
              &#8594; For that wee need to acces the html element by using id
              name
            </h4>
            <h4>&#8594; Let's access the h1 by using id name</h4>
          </div>
          <div className="selectorIntropoints">
            <h4> {accessIdData}</h4>
          </div>
        </div>
      </div>
      <div className="buttonContainer">
        <Link to="/Smart-Learning/Css/Selectors/Selectors1">
          <button id="flexStart">START GAME</button>
        </Link>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default SelectorsIntro;
