import React from 'react';
import {Row,Col} from 'reactstrap';
import image from "./images/image-intro-mobile.jpg";

export default function ContenIntro(){
  return(
    <Row className = "row row-cols-1 firstconten"> 
      <Col className = "Col-6">
        <img src={image} alt=""/>
      </Col>
      <Col className="firstconten_contentinfo">
        <h1 className = "title">Humanizing your insurance.</h1>
        <p className = "text">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you the plan that's right for you. Ensure you and your loved ones are protected.</p>
        <button className = "butn firtcontenbutn">
          VIEW PLANS
        </button>
        <div className ="relleno">

        </div>
      </Col>
    </Row>
  );
}