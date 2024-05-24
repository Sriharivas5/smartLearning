import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

import Csshome from "./Pages/Home/Css/Csshome";
import Javascript from "./Pages/Home/Javascript/Javascript";

import FlexIntro from "./Pages/Home/Css/Flex/FlexIntro/FlexIntro";
import Flex from "./Pages/Home/Css/Flex/Flex1/Flex";
import Flex2 from "./Pages/Home/Css/Flex/Flex2/Flex2";
import Flex3 from "./Pages/Home/Css/Flex/Flex3/Flex3";
import Flex4 from "./Pages/Home/Css/Flex/Flex4/Flex4";
import Flex5 from "./Pages/Home/Css/Flex/Flex5/Flex5";
import Flex6 from "./Pages/Home/Css/Flex/Flex6/Flex6";
import Flex7 from "./Pages/Home/Css/Flex/Flex7/Flex7";
import Flex8 from "./Pages/Home/Css/Flex/Flex8/Flex8";

import SelectorsIntro from "./Pages/Home/Css/Selectors/SelectorsIntro/SelectorsIntro";
import Selectors from "./Pages/Home/Css/Selectors/Selector1/Selectors";
import Selectors2 from "./Pages/Home/Css/Selectors/Selectors2/Selectors2";
import Selectors3 from "./Pages/Home/Css/Selectors/Selectors3/Selectors3";
import Selectors4 from "./Pages/Home/Css/Selectors/Selectors4/Selectors4";

import PositionIntro from "./Pages/Home/Css/Positions/PositionIntro/PositionIntro";
import Positions from "./Pages/Home/Css/Positions/Position1/Positions";
import Position2 from "./Pages/Home/Css/Positions/Position2/Position2";

import Transform1 from "./Pages/Home/Css/Transform/Transform1/Transform1";
import Transform2 from "./Pages/Home/Css/Transform/Transform2/Transform2";
import Transform3 from "./Pages/Home/Css/Transform/Transform3/Transform3";
import Transform4 from "./Pages/Home/Css/Transform/Transform4/Transform4";




import Javascript_index from "./Pages/Home/Javascript/Javascript_index/Javascript_index";

import Level1 from "./Pages/Home/Javascript/Basics/Level1/Level1";
import Level2 from "./Pages/Home/Javascript/Basics/Level2/Level2";
import Level3 from "./Pages/Home/Javascript/Basics/Level3/Level3";

import While from "./Pages/Home/Javascript/Loops/WhileLoop/While";
import For_Loop from "./Pages/Home/Javascript/Loops/ForLoop/For_Loop";

import If_Condition from "./Pages/Home/Javascript/Conditional_Statements/If/If_Condition";
import Else from "./Pages/Home/Javascript/Conditional_Statements/Else/Else";
import Array1 from "./Pages/Home/Javascript/Arrays/Array1/Array1";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/Smart-Learning" element={<Home />} />
          <Route path="/Smart-Learning/Css" element={<Csshome />} />
          <Route path="/Smart-Learning/Js" element={<Javascript />} />

          <Route
            path="/Smart-Learning/Css/Flex/FlexIntro"
            element={<FlexIntro />}
          />
          <Route path="/Smart-Learning/Css/Flex/Flex1" element={<Flex />} />
          <Route path="/Smart-Learning/Css/Flex/Flex2" element={<Flex2 />} />
          <Route path="/Smart-Learning/Css/Flex/Flex3" element={<Flex3 />} />
          <Route path="/Smart-Learning/Css/Flex/Flex4" element={<Flex4 />} />
          <Route path="/Smart-Learning/Css/Flex/Flex5" element={<Flex5 />} />
          <Route path="/Smart-Learning/Css/Flex/Flex6" element={<Flex6 />} />
          <Route path="/Smart-Learning/Css/Flex/Flex7" element={<Flex7 />} />
          <Route path="/Smart-Learning/Css/Flex/Flex8" element={<Flex8 />} />

          <Route
            path="/Smart-Learning/Css/Selectors/SelectorsIntro"
            element={<SelectorsIntro />}
          />
          <Route
            path="/Smart-Learning/Css/Selectors/Selectors1"
            element={<Selectors />}
          />
          <Route
            path="/Smart-Learning/Css/Selectors/Selectors2"
            element={<Selectors2 />}
          />
          <Route
            path="/Smart-Learning/Css/Selectors/Selectors3"
            element={<Selectors3 />}
          />
          <Route
            path="/Smart-Learning/Css/Selectors/Selectors4"
            element={<Selectors4 />}
          />
          <Route
            path="/Smart-Learning/Css/Positions/PositionIntro"
            element={<PositionIntro />}
          />
          <Route
            path="/Smart-Learning/Css/Positions/Positions1"
            element={<Positions />}
          />
          <Route
            path="/Smart-Learning/Css/Positions/Positions2"
            element={<Position2 />}
          />


          <Route
            path="/Smart-Learning/Css/Transform/Transform1"
            element={<Transform1 />}
          />
          <Route
            path="/Smart-Learning/Css/Transform/Transform2"
            element={<Transform2 />}
          />
          <Route
            path="/Smart-Learning/Css/Transform/Transform3"
            element={<Transform3 />}
          />
          <Route
            path="/Smart-Learning/Css/Transform/Transform4"
            element={<Transform4 />}
          />

          <Route
            path="/Smart-Learning/Js/Index"
            element={<Javascript_index />}
          />

          <Route path="/Smart-Learning/Js/Basics/Level1" element={<Level1 />} />
          <Route path="/Smart-Learning/Js/Basics/Level2" element={<Level2 />} />
          <Route path="/Smart-Learning/Js/Basics/Level3" element={<Level3 />} />
          <Route
            path="/Smart-Learning/Js/Loops/Forloop"
            element={<For_Loop />}
          />
          <Route path="Smart-Learning/Js/Loops/WhileLoop" element={<While />} />
          <Route
            path="/Smart-Learning/Js/Conditions/If"
            element={<If_Condition />}
          />
          <Route path="Smart-Learning/Js/Conditions/Else" element={<Else />} />

          <Route path="/Smart-Learning/Js/Arrays/Array1" element={<Array1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;