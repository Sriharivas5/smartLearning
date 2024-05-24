import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../../../../Components/ScrollToTop/ScrollToTop'
import './FlexIntro.css'

const FlexIntro = () => {
  return (
    <div className="flexIntro">
      <div className="headindFlex">
        <h1>What is FlexBox</h1>
      </div>
      <div className="flexIntroHeader">
        <h2>
          Flexbox is a one-dimensional layout method for arranging items in either rows or columns.
        </h2>
        <h3>&#8594;
          Vertically (or) Horizontally centering a block of content inside its parent .
        </h3>
        <h3>&#8594;
          Making all the children of a container take up an equal amount of the available width/height .
        </h3>
        <div className='buttonContainer'>
          <Link to='/Smart-Learning/Css/Flex/Flex1'><button id='flexStart'>START GAME</button></Link>
        </div>
      </div>
      <div className="exampleFlex">
        <div className="exampleFlexHeading">
          {/* <h2> Example :</h2> */}
        </div>
        <h2>div</h2>
        <div className='flexContainer'>
          <div className="box1">item1</div>
          <div className="box2">item2</div>
          <div className="box3">item3</div>
        </div>
      </div>
      <div className="exampleFlexDescription">
        <div className="intro">
          <div className="flexintroContent">
            <h4>
              Consider above div it contains 3 divs named as item1 ,item2 ,item3
            </h4>
            <h4>&#8594;
              Just think if we want to adjust those three side by side and maintain a certain distance between them and align them in vertically in a specific way .How we can acheive that thing?
            </h4>
            <h4>&#8594;
              We can put them side by side by using inline-block proerty or some other css property but what about spacing between them and vertical alignment it will become a hard task to us .
            </h4>
            <h4>&#8594;
              By using Flexbox model we can achieve all these things very simple and easy manner.
            </h4>
            <h4>&#8594;
              Directly we can write display:flex to parent div we can arrange them side by side.
            </h4>
            <h4>&#8594;
              Now let's dive deep into flexbox it has some properties like
            </h4>
          </div>
          <div className="flexIntropoints">
            <h5>&#9733; Justify-content</h5>
            <h5>&#9733; Align-items ,</h5>
            <h5>&#9733; Flex-direction  ,</h5>
            <h5>&#9733; Flex-wrap  and some other but we use these four mainly in our website</h5>
          </div>
        </div>
        <div className="exampleJustifyContent">
          <div className="exampleJustifyContentIntro">
            <h2>Let's discuss about each concept in detail.</h2>
            <div>
              <h3>Justify-content :</h3>
              <h4>
                We can arrange items in horizontally using this property ,
                it has properties like
              </h4>
            </div>
            <h5> &#10233; Flex-start</h5>
            <h5> &#10233; Center</h5>
            <h5> &#10233; Flex-end</h5>
            <h5> &#10233; Space-between</h5>
            <h5> &#10233; Space-around</h5>
            <h5> &#10233; Space-evenly</h5>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>Flex-start</h3>
            <h4> Flex-start : aligns items at starting point  </h4>
            <div className='flexContainer flexStart'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>Center</h3>
            <h4> Center : align items in center of the div  </h4>
            <div className='flexContainer center'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentSpace-between commonJustifyClass">
            <h3>Flex-end</h3>
            <h4> Flex-end : aligns items at ending point </h4>
            <div className='flexContainer flexEnd'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentSpace-around commonJustifyClass">
            <h3>Space-between</h3>
            <h4> Space-between : aligns items in horizaltally and giving spacing between  them</h4>
            <div className='flexContainer spaceBetween'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>Space-around</h3>
            <h4> SpSpace-around : aligns items in horizaltally and giving spacing around  them</h4>
            <div className='flexContainer spaceAround'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentSpace-evenly commonJustifyClass">
            <h3>Space-evenly</h3>
            <h4> Space-evenly : aligns items in horizaltally and giving spacing evenly  among all items</h4>
            <div className='flexContainer spaceEvenly'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
        </div>
        <div className="exampleJustifyContent">
          <div className="exampleJustifyContentIntro">
            <div>
              <h3>Align-items :</h3>
              <h4>
                We can arrange items in vertical using this property ,
                it has properties like
              </h4>
            </div>
            <h5> &#10233; Flex-start</h5>
            <h5> &#10233; Center</h5>
            <h5> &#10233; Flex-end</h5>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>Flex-start</h3>
            <h4> Flex-start : aligns items at starting point  </h4>
            <div className='flexContainer flexStartVertical'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>Center</h3>
            <h4> Center : align items in center of the div  </h4>
            <div className='flexContainer flexEndVertical'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>


        </div>
        <div className="exampleJustifyContent">
          <div className="exampleJustifyContentIntro">
            <div>
              <h3>Flex-direction :</h3>
              <h4>
                We can decide the direction of items to be in ,
                it has properties like
              </h4>
            </div>
            <h5> &#10233; row</h5>
            <h5> &#10233; row-reverse</h5>
            <h5> &#10233; column</h5>
            <h5> &#10233; Column-reverse</h5>
          </div>
          <div className="exampleJustifyContentStart commonJustifyClass">
            <h3>row-reverse</h3>
            <h4> row-reverse : we can arrange items reverse row direction </h4>
            <div className='flexContainer rowReverse'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>column</h3>
            <h4> column : we can arrange items column direction </h4>
            <div className='flexContainer column'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
          <div className="exampleJustifyContentCenter commonJustifyClass">
            <h3>column-reverse</h3>
            <h4> column : we can arrange items column reverse direction  </h4>
            <div className='flexContainer columnReverse'>
              <div className="box1">item1</div>
              <div className="box2">item2</div>
              <div className="box3">item3</div>
            </div>
          </div>
        </div>
      </div>
      <div className='buttonContainer'>
          <Link to='/Smart-Learning/Css/Flex/Flex1'><button id='flexStart'>START GAME</button></Link>
        </div>
      <ScrollToTop />
      {/* <div className="exampleFlexDescription">
        <pre>
          Consider above div it contains 3 divs named as item1 ,item2 ,item3
          <br />
          Just think if we want to adjust those three side by side and maintain a certain distance between them and align them in vertically in a specific way .How we can acheive that thing?
          <br />
          We can put them side by side by using inline-block proerty or some other css property but what about spacing between them and vertical alignment it will become a hard task to us .
          <br />
          By using Flexbox model we can achieve all these things very simple and easy manner.
          <br />
          Directly we can write display:flex to parent div we can arrange them side by side.
          <br />
          Now let's dive deep into flexbox it has some properties like
          <ul>
            <li>Justify-content, </li>
            <li> Align-items ,</li>
            <li> Flex-direction ,</li>
            <li>Flex-wrap  and some other but we use these four mainly in our website </li>
          </ul>
          <br />
          Let's discuss about each concept in detail.
          <h2>Justify-content</h2>
          We can arrange items in horizontally using this property ,
          it has properties like
          <ul>
            <li>Flex-start</li>
            <li>Center</li>
            <li>Flex-end</li>
            <li>Space-between</li>
            <li>Space-around</li>
            <li>Space-evenly</li>
          </ul>
          <h3>Flex-start</h3>
          Flex-start : aligns items at starting point
          <div className='flexContainer flexStart'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
          <h3>Center</h3>
          Center : align items in center of the div
          <div className='flexContainer center'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>

          <h3>Flex-end</h3>
          Flex-end : aligns items at ending point
          <div className='flexContainer flexEnd'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
          <h3>Space-between</h3>
          Space-between : aligns items in horizaltally and giving spacing between  them
          <div className='flexContainer spaceBetween'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
          <h3>Space-around</h3>
          Space-around : aligns items in horizaltally and giving spacing around  them
          <div className='flexContainer spaceAround'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
          <h3>Space-evenly</h3>
          Space-evenly : aligns items in horizaltally and giving spacing evenly  among all items
          <div className='flexContainer spaceEvenly'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>



          <h2>Align-items</h2>
          We can arrange items in vertical using this property ,
          it has properties like
          <ul>
            <li>Flex-start</li>
            <li>Center</li>
            <li>Flex-end</li>
          </ul>
          <h3>Flex-start</h3>
          Flex-start : aligns items at starting point
          <div className='flexContainer flexStartVertical'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
          <h3>Center</h3>
          Center : align items in center of the div
          <div className='flexContainer centerVertical'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>

          <h3>Flex-end</h3>
          Flex-end : aligns items at ending point
          <div className='flexContainer flexEndVertical'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>






          <h2>Flex-direction</h2>
          We can decide the direction of items to be in ,
          it has properties like
          <ul>
            <li>row</li>
            <li>row-reverse</li>
            <li>column</li>
            <li>Column-reverse</li>
          </ul>
          <h3>row</h3>
          row: we can arrange items in row by deafualt items direction will be row
          <div className='flexContainer row'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
          <h3>row-reverse</h3>
          row-reverse : we can arrange items reverse row direction
          <div className='flexContainer rowReverse'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>

          <h3>column</h3>
          column : we can arrange items column direction
          <div className='flexContainer column'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
          <h3>column-reverse</h3>
          column : we can arrange items column reverse direction
          <div className='flexContainer columnReverse'>
            <div className="box1">item1</div>
            <div className="box2">item2</div>
            <div className="box3">item3</div>
          </div>
        </pre>
      </div> */}
    </div>
  )
}

export default FlexIntro
