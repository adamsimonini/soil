import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from './Chart';
import LeftNav from './LeftNav';
import Insurance from './Insurance';
import Leaf from './images/Leaf.png';

export default class Layout extends React.Component {

    Page0 = () => (
        <div></div>
    );

    Page1 = () => (
       <Chart />
    );

    Page2 = () => (
        <Insurance />
     );

  render() {
    return (
      <Container>
        <Row>
            <Col xs="12" sm="2"><img src={Leaf} /></Col>
            <Col xs="12" sm="6"></Col>
        </Row>
        <Router>
            <Row>
                <Col xs="12" sm="2"><LeftNav /></Col>
                <Col xs="12" sm="8">
                        <Route exact path="/" component={this.Page0} /> 
                        <Route path="/Chart" component={this.Page1} />
                        <Route path="/Insurance" component={this.Page2} />
                  </Col>
                  <Col xs="12" sm="2"></Col>
            </Row>
        </Router>
      </Container>
    );
  }
}
