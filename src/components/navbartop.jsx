import React, { useState } from "react";
import logo from './images/logo.svg';
import open from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";

export default function NavBarTop() {
  const [abrir, setabrir] = useState(false);
  const icon = [open, close];
  function toogler() {
    setabrir(!abrir);
  }
  return (
    <>
      <Navbar expand="sm">
        <NavbarBrand href="#">
          <img src={logo} alt="logo" className="logo"/>
        </NavbarBrand>
        <NavbarToggler onClick={toogler}>
          <img src={abrir ? icon[1] : icon[0]} alt="" />
        </NavbarToggler>
        <Collapse isOpen={abrir} navbar className="collapse">
          <button href= "#" className = "butn ">HOW WE WORK</button>
          <button href= "#" className = "butn ">BLOG</button>
          <button href= "#" className = "butn ">ACCOUNT</button>
          <button href= "#" className = "butn ">VIEW PLANS</button>
        </Collapse>
      </Navbar>
    </>
  );
}
