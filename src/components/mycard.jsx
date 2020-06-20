import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
} from "reactstrap";

export default function MyCard(props) {
  return (
    <Card className= "mycard">
      <CardImg src={props.img} className="card_img"></CardImg>
      <CardBody>
        <CardTitle className = "card_title">{props.title}</CardTitle>
        <CardText className = "card_text">
          {props.text}
        </CardText>
      </CardBody>
    </Card>
  );
}
