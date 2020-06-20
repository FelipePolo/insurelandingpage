import React from "react";
import { Col } from "reactstrap";

export default function List(props) {
  return (
    <Col className="list">
      <h1 className="list_h1">{props.title}</h1>
      <ul className="list_list">
        {props.elemen.map((x) => (
          <li className="list_list_li"><a href = "#">{x}</a></li>
        ))}
      </ul>
    </Col>
  );
}
