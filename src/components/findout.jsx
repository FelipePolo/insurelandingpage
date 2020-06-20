import React from 'react';
import {Row,Col} from 'reactstrap';
export default function Findout(){
  return(
    <div className ="wr">
      <Row xs ={"1"} className="findout">
        <Col>
          <h1 className = "titlef">Find out more about how we work</h1>
        </Col>
        <Col className="container_butnf">
          <button className = "firtcontenbutn">
            HOW WE WORK
          </button>
        </Col>
      </Row>
    </div>
  );
}