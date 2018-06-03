import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Owl from './images/owl.png';
import { Container, Row, Col } from 'reactstrap';

export default class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <Nav vertical>
          <div>
            <img id="owl" src={Owl} />
          </div>
          <Row>
            <Col xs="6" sm="12">
              <NavItem>
                <NavLink href="#"><Link to="/Featured">Featured Projects</Link></NavLink>
              </NavItem>
            </Col>
            <Col xs="6" sm="12">
              <NavItem>
                <NavLink href="#"><Link to="/Chart">Work Projects</Link></NavLink>
              </NavItem>
            </Col>
            <Col xs="6" sm="12">
              <NavItem>
                <NavLink href="#"><Link to="/Chart">Web Apps</Link></NavLink>
              </NavItem>
            </Col>
            <Col xs="6" sm="12">
              <NavItem>
                <NavLink href="#"><Link to="/Chart">About Me</Link></NavLink>
              </NavItem>
            </Col>
            <Col xs="6" sm="12">
              <NavItem>
                <NavLink href="#"><Link to="/Chart">Hackathons</Link></NavLink>
              </NavItem>
            </Col>
            <Col xs="6" sm="12">
              <NavItem>
                <NavLink href="#"><Link to="/Chart">Websites</Link></NavLink>
              </NavItem>
            </Col>
          </Row>
        </Nav>
      </div>
    );
  }
}