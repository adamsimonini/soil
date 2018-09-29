import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Card from '../Card/Card';
import Tesla from '../images/projects/tesla.png';
import Blog from '../images/projects/blog.png';
import Pin from '../images/projects/pinpal.png';
import Bernie from '../images/projects/bernie.png';
import Form from '../images/projects/form.png';
import Twitch from '../images/projects/twitch.png';
import './WebApps.css';

export default class WebApps extends Component{

  render() {
    const html = <i style={{width: 100}} className="devicon-html5-plain-wordmark colored"></i>;
    const css = <i className="devicon-css3-plain-wordmark colored"></i>;
    const jquery = <i className="devicon-jquery-plain-wordmark colored"></i>;
    const react = <i className="devicon-react-plain-wordmark colored"></i>;
    const bootstrap = <i className="devicon-bootstrap-plain-wordmark colored"></i>;
    const javascript = <i className="devicon-javascript-plain colored"></i>;

    const cards = [
        {
            name: "Tesla Roadster Clone",
            technology: [jquery, html, css],
            image: Tesla,
        },
        {
            name: "Simple Blog",
            technology: [html, css],
            image: Blog,
        },
        {
            name: "Pin Pal",
            technology: [javascript, bootstrap, html, css],
            image: Pin,
        },
        {
            name: "Bernie2020",
            technology: [react, html, css],
            image: Bernie,
        },
        {
          name: "React Validation",
          technology: [react, html, css],
          image: Form,
        },
        {
          name: "Twitch App",
          technology: [bootstrap, html, css],
          image: Twitch,
        },
    ];
    return (
        <div id="web-box" className="container">
            <h1 className="section-title">Web Apps</h1>
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