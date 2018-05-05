import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chart from './Chart';
import LeftNav from './LeftNav';
import Featured from './Featured';
import Moment from 'react-moment';

export default class Layout extends React.Component {

    Page0 = () => (
        <div>
            <div style={{
                display: 'block',
                height: '200px',
                }}>
                <img width="400px" style={{float:'left'}} src={require('./images/weather.png')}/>
            </div>
            <div><p style={{
                float: 'left',
                paddingLeft: '10px',
                fontSize: '24px'
                }}> Commodity </p></div>
            <img width="100%" src={require('./images/chart.png')}/>
            <div><p style={{
                float: 'left',
                paddingLeft: '10px',
                fontSize: '24px'
                }}> News </p></div>
            <div width="100%" style={{display: '-webkit-inline-box', marginLeft: '-18px', paddingTop: '10px'}}>
            <img width="300px" src={require('./images/news1.png')}/>
            <img width="300px"  src={require('./images/news2.png')}/>
            <img width="300px"  src={require('./images/news3.png')}/>
            </div>
        </div>
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
                <Col xs="12" sm="2"><LeftNav /></Col>
                <Col xs="12" sm="10">
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
