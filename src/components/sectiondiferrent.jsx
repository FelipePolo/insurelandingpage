import React from "react";
import { Row, Col } from "reactstrap";
import snappy from "./images/icon-snappy-process.svg";
import price from "./images/icon-affordable-prices.svg";
import people from "./images/icon-people-first.svg";
import MyCard from "./mycard";

const data_card = [
  {
    key: 1,
    img: snappy,
    title: "Snappy Process",
    text:
      "Our application process can be completed in minutes, not hours.Don't get stuck filling in tedious forms.",
  },
  {
    key: 2,
    img: price,
    title: "Affordable Prices",
    text:
      "We don't want toy worrying about high monthly costs. Our prices may be low , but we still offer the best coverage possible.",
  },
  {
    key: 3,
    img: people,
    title: "People First",
    text:
      "Our plans aren't full of conditions and clauses to prevent payauts. We make sure you're covered when you need it.",
  },
];

export default function SectionD() {
  return (
    <>
      <p className="titled">We're different</p>
      <Row>
        <Col>
          {data_card.map((data) => (
            <MyCard
              img={data.img}
              title={data.title}
              text={data.text}
              key={data.key}
            />
          ))}
        </Col>
      </Row>
    </>
  );
}
