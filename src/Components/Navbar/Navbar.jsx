import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="nav ">
        <li>
          <Link to="/smartLearning/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <h1>Css</h1>
          <ul className="dropdown">
            <Link to="/Smart-Learning/Css">
              <li>Css Home</li>
            </Link>
            <Link to="/Smart-Learning/Css/Flex/FlexIntro">
              <li>Flex</li>
            </Link>
            <Link to="/Smart-Learning/Css/Selectors/SelectorsIntro">
              <li>Selectors</li>
            </Link>
            <Link to="/Smart-Learning/Css/Positions/PositionIntro">
              <li>Position</li>
            </Link>
            <Link to="/Smart-Learning/Css/Transform/Transform1">
              <li>Transform</li>
            </Link>
            <Link>
              <li>Grid</li>
            </Link>
            <Link>
              <li>Pseudo-className</li>
            </Link>
            <Link>
              <li>Pseudo-Element</li>
            </Link>
          </ul>
        </li>
        <li>
          <h1>JavaScript</h1>
          <ul className="dropdown">
            <Link to="/Smart-Learning/Js">
              <li>Javascript</li>
            </Link>
            <Link to="/Smart-Learning/Js/Basics/Level1">
              <li>Basics</li>
            </Link>
            <Link to="/Smart-Learning/Js/Conditions/If">
              <li>Conditional Statements</li>
            </Link>
            <Link to="/Smart-Learning/Js/Loops/Forloop">
              <li>Loops</li>
            </Link>

            <Link to="/Smart-Learning/Js/Arrays/Array1">
              <li>Arrays</li>
            </Link>
          </ul>
        </li>
        <li>
          <h1>React js</h1>
          <ul className="dropdown">
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
