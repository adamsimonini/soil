import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Work.css';

export default class Work extends Component{

  render() {
    return (
      <Container>
        <h1 style={{marginBottom: 25}}>Work Projects</h1>
        <Row>
         <Col xs="12" className="">
          <h3 className="work-title">Homepage Redesign</h3>
          <div class="bg">
            <img className="work-image" src={require('../images/work/homepage.jpg')} />
            <div className="overlay">
              <span>Increased registrations by over 100% ✓</span>
              <br />
              <span>Replaced icon art with logos of major companies we do business with, thereby increasing trust and brand value ✓</span>
            </div>
          </div>
         </Col>
        </Row>
        <Row>
         <Col xs="12" className="">
          <h3 className="work-title">About Pages + Gallary Redesign</h3>
          <div class="bg">
          <img className="work-image" src={require('../images/work/gallery.jpg')} />
            <div className="overlay">
              <span>Fixed broken HTML & CSS ✓</span>
              <br />
              <span>Implemented true responsive design ✓</span>
            </div>
          </div>
         </Col>
        </Row>
        <Row>
         <Col xs="12" className="">
          <h3 className="work-title">Monthly Promotions</h3>
          <div class="bg">
            <img className="work-image" src={require('../images/work/promos.png')} />
            <div class="overlay">
              <p>Integrated the monthly promotions directly into the homepage ✓</p>
              <p>Created pseudo MVC design, in order to make swapping promotions quick & easy ✓</p>
            </div>
          </div>
         </Col>
        </Row>
      </Container>
    );
  }
};