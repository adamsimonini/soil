import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Hackathons.css';

export default class Hackathons extends Component{

  render() {

    const html = <i className="devicon devicon-html5-plain-wordmark colored"></i>;
    const css = <i className="devicon devicon-css3-plain-wordmark colored"></i>;
    const jquery = <i className="devicon devicon-jquery-plain-wordmark colored"></i>;
    const react = <i className="devicon devicon-react-plain-wordmark colored"></i>;
    const bootstrap = <i className="devicon devicon-bootstrap-plain-wordmark colored"></i>;
    const javascript = <i className="devicon devicon-javascript-plain colored"></i>;
    const node = <i style={{fontSize: 80}} class="devicon devicon-nodejs-plain-wordmark colored"></i>;
    const aws = <i style={{fontSize: 80}} class="devicon devicon-amazonwebservices-plain-wordmark colored"></i>;
    const angular = <i class="devicon devicon-angularjs-plain colored"></i>

    return (
      <Container>
        <h1 style={{marginBottom: 25}}>Hackathons</h1>
        <Row>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Gift The Code 2018 (upcoming)</h2>
            <img className="hack-image" src={require('../images/hackathons/gtc18.jpg')} />
            <p>Outcome:</p>
            <p>pending...</p>
          </Col>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Hack to Give Back (upcoming)</h2>
            <img className="hack-image" src={require('../images/hackathons/give-back.jpg')} />
            <p>Outcome:</p>
            <p>pending...</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Elevate 2018</h2>
            <img className="hack-image" src={require('../images/hackathons/elevate18.jpg')} />
            <div className="hack-tech">
              {react}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" src={require('../images/trophy/egg.png')} />
          </Col>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Canadian Life Hacks</h2>
            <img className="hack-image" src={require('../images/hackathons/lifehack.jpg')} />
            <div className="hack-tech">
              {node}{aws}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" src={require('../images/trophy/silver.png')} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Oxford Retail Challenge</h2>
            <img className="hack-image" src={require('../images/hackathons/oxford.jpg')} />
            <div className="hack-tech">
              {javascript}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" src={require('../images/trophy/egg.png')} />
          </Col>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Mission Hack</h2>
            <img className="hack-image" src={require('../images/hackathons/mission-hack.jpg')} />
            <div className="hack-tech">
              {react}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" src={require('../images/trophy/bronze.png')} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Gift The Code 2017</h2>
            <img className="hack-image" src={require('../images/hackathons/gtc17.jpg')} />
            <div className="hack-tech">
              {angular}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" src={require('../images/trophy/gold.png')} />
          </Col>
          {/* <Col xs="12" sm="6" className="hack-col">
          </Col> */}
        </Row>
      </Container>
    );
  }
};