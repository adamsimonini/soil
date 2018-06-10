import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Card from './Card';
import Galaxy from './images/overwatch.jpg';
import Calculator from './images/calculator.png';
import Twitch from './images/twitch.png';
import Yorkdale from './images/yorkdale.png';

export default class Featured extends Component{

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
            name: "Overwatch Team Builder",
            technology: [javascript, jquery, html, css],
            image: Galaxy,
            description: 'Assemble your team champion! Select a hero for each position, and then click "share". A link will be copied to your clipboard containing all the relevant information as URL parameters. The information is parsed upon each visit. Layout built with CSS Grid.'
        },
        {
            name: "Twitch Channel App",
            technology: [jquery, html, css, foundation],
            image: Twitch,
            description: 'Dynamically manipulate a list of Twitch streams, filtering them by game type or name. See which channels are live and which are offline, in real-time. This uses the Twitch API to make AJAX requests, and jQuery to style, manipulate, and generate DOM elements.'
        },
        {
            name: "JS Calculator",
            technology: [javascript, bootstrap, css],
            image: Calculator,
            description: 'A simple javascript calculator. I leveraged the style libraries "tachyons" and "tilt.js" to add responsiveness and on hover styles.'
        },
        {
            name: "Yorkdale Experience",
            technology: [bootstrap, html, css],
            image: Yorkdale,
            description: 'Designed and built at a hackathon, the challenge was to bring technology & retail together. Our team decided to focus on increasing mall dwell time and catering to "superior shoppers". Yorkdale Experience is a directory, data collection, and exclusive merchandise catalogue web app.'
        },
    ];
    return (
        <div className="container">
            <Row>
                <Col xs="12" md="6">
                    <Card props={cards[0]}/>
                </Col>
                <Col xs="12" md="6">
                    <Card props={cards[1]}/>
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                    <Card props={cards[2]}/>
                </Col>
                <Col xs="12" md="6">
                    <Card props={cards[3]}/>
                </Col>
            </Row>
        </div>
    );
  }
};