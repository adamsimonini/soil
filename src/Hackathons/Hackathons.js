import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Hackathons.css';

export default class Hackathons extends Component{

  render() {

    const html = <i className="devicon devicon-html5-plain-wordmark colored"></i>;
    const css = <i className="devicon devicon-css3-plain-wordmark colored"></i>;
    const react = <i className="devicon devicon-react-plain-wordmark colored"></i>;
    const javascript = <i className="devicon devicon-javascript-plain colored"></i>;
    const vue = <i className="devicon devicon-vuejs-plain-wordmark colored"></i>;
    const node = <i style={{fontSize: 80}} class="devicon devicon-nodejs-plain-wordmark colored"></i>;
    const aws = <i style={{fontSize: 80}} class="devicon devicon-amazonwebservices-plain-wordmark colored"></i>;
    const angular = <i class="devicon devicon-angularjs-plain colored"></i>
    // const jquery = <i className="devicon devicon-jquery-plain-wordmark colored"></i>;
    // const bootstrap = <i className="devicon devicon-bootstrap-plain-wordmark colored"></i>;

    return (
      <Container>
        <h1 className="section-title">Hackathons</h1>
        <Row>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Small Business Hackathon Toronto (2018)</h2>
            <img className="hack-image" alt="Small Business Hackathon Toronto" src={require('../images/hackathons/small-business-hack.png')} />
            <div className="hack-tech">
              {/* {html}{css} */}
            </div>
            <p>Outcome:</p>
              (Pending...)
          </Col>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Gift The Code (2018)</h2>
            <img className="hack-image" alt="Gift The Code 2018" src={require('../images/hackathons/gtc18.jpg')} />
            <div className="hack-tech">
              {html}{css}{javascript}{vue}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" alt="Gold" src={require('../images/trophy/gold.png')} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Hack to Give Back (2018)</h2>
            <img className="hack-image" alt="Give Back" src={require('../images/hackathons/give-back.jpg')} />
            <div className="hack-tech">
              {html}{css}{javascript}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" alt="Silver" src={require('../images/trophy/silver.png')} />
          </Col>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Elevate (2018)</h2>
            <img className="hack-image" alt="Elevate 2018" src={require('../images/hackathons/elevate18.jpg')} />
            <div className="hack-tech">
              {react}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" alt="Egg" src={require('../images/trophy/egg.png')} />
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Amazon Canadian Life Hacks (2018)</h2>
            <img className="hack-image" alt="Amazon Life Hack" src={require('../images/hackathons/lifehack.jpg')} />
            <div className="hack-tech">
              {node}{aws}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" alt="Silver" src={require('../images/trophy/silver.png')} />
          </Col>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Oxford Retail Challenge (2018)</h2>
            <img className="hack-image" alt="Oxford Retail Hack" src={require('../images/hackathons/oxford.jpg')} />
            <div className="hack-tech">
              {javascript}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" alt="Egg" src={require('../images/trophy/egg.png')} />
          </Col>
        </Row>
        <Row>
        <Col xs="12" sm="6" className="hack-col">
            <h2>Mission Hack (2018)</h2>
            <img className="hack-image" alt="Mission Hack" src={require('../images/hackathons/mission-hack.jpg')} />
            <div className="hack-tech">
              {react}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" alt="Bronze" src={require('../images/trophy/bronze.png')} />
          </Col>
          <Col xs="12" sm="6" className="hack-col">
            <h2>Gift The Code (2017)</h2>
            <img className="hack-image" alt="Gift The Code 2017" src={require('../images/hackathons/gtc17.jpg')} />
            <div className="hack-tech">
              {angular}{html}{css}
            </div>
            <p>Outcome:</p>
            <img className="hack-image" alt="Gold" src={require('../images/trophy/gold.png')} />
          </Col>
          {/* <Col xs="12" sm="6" className="hack-col">
          </Col> */}
        </Row>
      </Container>
    );
  }
};