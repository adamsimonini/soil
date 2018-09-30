import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem } from 'reactstrap';
import Owl from '../images/owl.png';
import './LeftNav.css';


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
          <span id="close" onClick={this.closeNav}>X</span>
          <div style={{ marginBottom: 10}}>
          </div>
          <div id="navBox">
            <NavItem id="owl">
              <Link style={{borderBottom: 0}} to="/">
                <img id="owl" src={Owl} alt="Owl Logo"/>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Featured">Featured Projects</Link>
            </NavItem>
            <NavItem>
              <Link to="/">About Me</Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/Work">Work Projects</Link>
            </NavItem> */}
            <NavItem>
              <Link to="/WebApps">Web Apps</Link>
            </NavItem>
            <NavItem>
              <Link to="/Hackathons">Hackathons</Link>
            </NavItem>
          </div>
        </Nav>
    );
  }
}
