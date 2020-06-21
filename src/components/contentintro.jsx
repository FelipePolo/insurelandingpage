import React from 'react';
import {Row,Col} from 'reactstrap';

export default function ContenIntro(){
  return(
    <Row xs = {"1"}  className = "firstconten"> 
      <Col className = "order-md-10 img_contenedor" md={"6"}>
        <Col className = "img_conten p-0" >
        </Col>
      </Col>
      <Col className="firstconten_contentinfo order-md-2" md={"6"}>
        <h1 className = "title">Humanizing your insurance.</h1>
        <p className = "text">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you the plan that's right for you. Ensure you and your loved ones are protected.</p>
        <button className = "butn firtcontenbutn">
          VIEW PLANS
        </button>
      </Col>
    </Row>
  );
}