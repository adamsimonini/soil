import React from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Owl from './images/owl.png';
import { Row, Col } from 'reactstrap';


export default class LeftNav extends React.Component {

  openNav() {
    document.getElementById("hamburger").style.display = "none";
    document.getElementById("close").style.display = "unset";
    document.getElementById("navBox").style.display = "unset";
  }
  closeNav() {
    document.getElementById("hamburger").style.display = "unset";
    document.getElementById("close").style.display = "none";
    document.getElementById("navBox").style.display = "none";
  }
  render() {
    return (
        <Nav vertical>
        	<span id="hamburger" onClick={this.openNav}>&#9776;</span>
          <span id="close" onClick={this.closeNav} style={{display: 'none'}}>X</span>
          <div style={{ marginBottom: 10}}>
            <img id="owl" src={Owl} />
          </div>
          <div id="navBox">
            <NavItem>
              <NavLink href="#"><Link to="/Featured">Featured Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link to="/Chart">Work Projects</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link to="/Chart">Web Apps</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><Link to="/Chart">About Me</Link></NavLink>
            </NavItem>
            <NavItem style={{borderBottom: 0}}>
              <NavLink href="#"><Link to="/Chart">Hackathons</Link></NavLink>
            </NavItem>
          </div>
        </Nav>
    );
  }
}
