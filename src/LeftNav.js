import React from 'react';
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Owl from './images/owl.png';
import { Row, Col } from 'reactstrap';


export default class LeftNav extends React.Component {
  render() {
    return (
        <Nav vertical>
          <div style={{ marginBottom: 10}}>
            <img id="owl" src={Owl} />
          </div>
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
        </Nav>
    );
  }
}
