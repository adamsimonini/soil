import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink href="#"><Link to="/">Profile</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/Chart">Crop Analysis</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"><Link to="/Insurance">Insurance Analysis</Link></NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}