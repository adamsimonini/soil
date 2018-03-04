import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from './Chart';
import LeftNav from './LeftNav';
import Insurance from './Insurance';
import Leaf from './images/Leaf.png';
import Moment from 'react-moment';

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

    const location = {
        maxWidth: '30px',
    };

    const farmer = {
        maxWidth: '70px',
        borderRadius: "30px"
    };

    const dateToFormat = '1976-04-19T12:59-0500';

    return (
      <Container>
        <Row className="mt2 items-center">
            <Col xs="12" sm="2"><img src={Leaf} /></Col>
            <Col xs="12" sm="6"></Col>
            <Col xs="12" sm="1">
                
                <Moment interval={1000} format="DD/MM/YYYY HH:mm:ss">
                    1976-04-19T12:59-0500
                </Moment>

            </Col>
            <Col xs="12" sm="1"><img style={location} src={ require('./images/location.png') } /></Col>
            <Col xs="12" sm="2"><img style={farmer} src={ require('./images/Sam.png') } /></Col>
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
