import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from './Chart';
import LeftNav from './LeftNav';
import Insurance from './Insurance';

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
        <Router>
            <Row>
                <Col xs="12" sm="2"><LeftNav /></Col>
                <Col xs="12" sm="10">
                        <Route exact path="/" component={this.Page0} /> 
                        <Route path="/Chart" component={this.Page1} />
                        <Route path="/Insurance" component={this.Page2} />
                  </Col>

                  {/* <Route path="/about" component={About} /> */}
            </Row>
        </Router>
      </Container>
    );
  }
}
