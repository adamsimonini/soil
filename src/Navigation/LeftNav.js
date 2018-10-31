import React from 'react';
import { Link } from "react-router-dom";
import Owl from '../images/owl.png';
import './LeftNav.css';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';


export default class LeftNav extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: false
    };
  }

  selected(){
    console.log('selected: ' + this.value);
    // this.setState({
    //   selected: true
    // });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
        <Navbar id="nav-container" color="faded" light>
          <NavbarToggler id="menu-toggle" onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav vertical>
              <div style={{ marginBottom: 10}}></div>
              <div id="navBox">
                <NavItem id="owl">
                  <Link style={{borderBottom: 0}} to="/">
                    <img id="owl" src={Owl} alt="Owl-logo"/>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/Featured" onClick={this.selected} value="Featured">Featured</Link>
                </NavItem>
                <NavItem>
                  <Link to="/" onClick={this.selected} value="About">About</Link>
                </NavItem>
                {/* <NavItem>
                  <Link to="/Work">Work Projects</Link>
                </NavItem> */}
                <NavItem>
                  <Link to="/WebApps" onClick={this.selected} value="Apps">Apps</Link>
                </NavItem>
                <NavItem>
                  <Link to="/Hackathons" onClick={this.selected} value="Hackathons">Hackathons</Link>
                </NavItem>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}
