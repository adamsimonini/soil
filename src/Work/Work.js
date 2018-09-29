import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Work.css';

export default class Work extends Component{

  render() {
    return (
      <Container>
        <h1 className="section-title">Work Projects</h1>
        <Row>
         <Col xs="12" className="">
          <div class="bg">
            <img className="work-image" alt="Homepage" src={require('../images/work/homepage.jpg')} />
            <div className="overlay">
              <h3 className="work-title">Homepage Redesign</h3>
              <br />
              <span>Increased registrations by over 100% ✓</span>
              <br />
              <span>Replaced icon art with logos of major companies we do business with, thereby increasing trust and brand value ✓</span>
            </div>
          </div>
         </Col>
        </Row>
        <Row>
         <Col xs="12" className="">
          <div class="bg">
          <img className="work-image" alt="Gallery" src={require('../images/work/gallery.jpg')} />
            <div className="overlay">
              <h3 className="work-title">About Pages + Gallary Redesign</h3>
              <br />
              <span>Fixed broken HTML & CSS ✓</span>
              <br />
              <span>Implemented true responsive design ✓</span>
            </div>
          </div>
         </Col>
        </Row>
        <Row>
         <Col xs="12" className="">
          <div class="bg">
            <img className="work-image" alt="Promotions" src={require('../images/work/promos.png')} />
            <div class="overlay">
              <h3 className="work-title">Monthly Promotions</h3>
              <br />
              <span>Integrated the monthly promotions directly into the homepage ✓</span>
              <br />
              <span>Created pseudo MVC design, in order to make swapping promotions quick & easy ✓</span>
            </div>
          </div>
         </Col>
        </Row>
      </Container>
    );
  }
};