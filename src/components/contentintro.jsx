import React from 'react';
import {Row,Col} from 'reactstrap';
import image from "./images/image-intro-mobile.jpg";

export default function ContenIntro(){
  return(
    <Row xs = {"1"} sm={"2"} className = "firstconten"> 
      <Col>
        <img src={image} alt=""/>
      </Col>
      <Col className="firstconten_contentinfo">
        <h1 className = "title">Humanizing your insurance.</h1>
        <p className = "text">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you the plan that's right for you. Ensure you and your loved ones are protected.</p>
        <button className = "butn firtcontenbutn">
          VIEW PLANS
        </button>
      </Col>
    </Row>
  );
}