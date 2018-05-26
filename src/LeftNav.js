import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <NavItem>
            <NavLink href="/">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Chart">Crop Analysis</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Insurance">Insurance Analysis</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}