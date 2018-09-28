import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../Card/Card';
import Galaxy from '../images/overwatch.jpg';
import Calculator from '../images/calculator.png';
import Twitch from '../images/twitch.png';
import Yorkdale from '../images/yorkdale.png';
import './WebApps.css';

export default class WebApps extends Component{

  render() {
    const html = <i style={{width: 100}} className="devicon-html5-plain-wordmark colored"></i>;
    const css = <i className="devicon-css3-plain-wordmark colored"></i>;
    const jquery = <i className="devicon-jquery-plain-wordmark colored"></i>;
    // const react = <i className="devicon-react-plain-wordmark colored"></i>;
    const bootstrap = <i className="devicon-bootstrap-plain-wordmark colored"></i>;
    const javascript = <i className="devicon-javascript-plain colored"></i>;
    const foundation = <i className="devicon-foundation-plain-wordmark colored"></i>;

    const cards = [
        {
            name: "Tesla Roadster Clone",
            technology: [jquery, html, css],
            image: Galaxy,
        },
        {
            name: "Simple Blog",
            technology: [html, css],
            image: Twitch,
        },
        {
            name: "Pin Pal",
            technology: [javascript, bootstrap, html, css],
            image: Calculator,
        },
        {
            name: "React Stopwatch",
            technology: [bootstrap, html, css],
            image: Yorkdale,
        },
        {
          name: "React Validation",
          technology: [bootstrap, html, css],
          image: Yorkdale,
        },
        {
          name: "React Validation",
          technology: [bootstrap, html, css],
          image: Yorkdale,
        },
    ];
    return (
        <div id="web-box" className="container">
          <Row>
            <Col xs="12" md="4">
                <Card props={cards[0]}/>
            </Col>
            <Col xs="12" md="4">
                <Card props={cards[1]}/>
            </Col>
            <Col xs="12" md="4">
                <Card props={cards[2]}/>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="4">
                <Card props={cards[3]}/>
            </Col>
            <Col xs="12" md="4">
                <Card props={cards[4]}/>
            </Col>
            <Col xs="12" md="4">
                <Card props={cards[5]}/>
            </Col>
          </Row>
         </div>
    );
  }
};