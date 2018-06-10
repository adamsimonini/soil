import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from './Chart';
import LeftNav from './LeftNav';
import Featured from './Featured';

export default class Layout extends React.Component {

    Page0 = () => (
        <Featured />
    );

    Page1 = () => (
       <Chart />
    );

    Page2 = () => (
        <Featured />
     );


  render() {
    return (
      <Container>
        <Router>
            <Row>
                <Col xs="12" className="leftNav"><LeftNav /></Col>
                <Col xs="12" sm={{ size: 10, offset: 2 }}>
                    <span class="title">Adam Simonini</span>
                    <Route exact path="/" component={this.Page0} /> 
                    <Route path="/Chart" component={this.Page1} />
                    <Route path="/Featured" component={this.Page2} />
                </Col>
            </Row>
        </Router>
      </Container>
    );
  }
}
