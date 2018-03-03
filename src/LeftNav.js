import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <p>Data</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#"><Link to="/">Profile</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/Chart">Crop Analysis</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Insurance Analysis</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}