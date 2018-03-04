import React from 'react';
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';
import Leaf from './images/Leaf.png';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <img src={Leaf} />
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