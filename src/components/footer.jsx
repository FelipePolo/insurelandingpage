import React from 'react';
import ListF from './listfotter';
import logo from './images/logo.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';
import {Row,Col} from 'reactstrap';

const data_footer = [
  {
    title:"OUR COMPANY",
    elemen:["HOW WE WORK","WHY INSURE?","CHECK PRICE","REVIEWS"],
  },
  {
    title:"HELP ME",
    elemen:["FAQ","TERMS OF USE","PRIVACY POLICY","COOKIES"],
  },
  {
    title:"CONTACT",
    elemen:["SALES","SUPPORT","LIVE CHAT"],
  },
  {
    title:"OTHERS",
    elemen:["CAREERS","PRESS","LICENSES"],
  }
]

export default function Footer(){
  return(
    <div className="col-12 p-0 footer">
      <Row className = "footer_header" xs ={"1"}>
        <Col className = "footer_header_logo">
          <a href = "#"><img src={logo} alt="logo" className="logo"/></a>
        </Col>
        <Col className ="footer_header_icons">
          <a href = "#" ><img src={facebook} alt=""/></a>
          <a href = "#"><img src={twitter} alt=""/></a>
          <a href = "#"><img src={pinterest} alt=""/></a>
          <a href = "#"><img src={instagram} alt=""/></a>
        </Col>
      </Row>
      <div className = "wr"><hr className ="d-sm-none"></hr></div>
      <Row className = "footer_body" xs = {"1"}>
        {
          data_footer.map((data)=>(
            <ListF title = {data.title} elemen = {data.elemen}></ListF>
          ))
        }
      </Row>
    </div>
  )
}