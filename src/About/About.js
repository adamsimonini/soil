import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './About.css';
import { Row, Col } from 'reactstrap';

export default class AboutMe extends Component{

  render() {

    const html = <i style={{width: 100}} className="devicon-html5-plain-wordmark colored"></i>;
    const css = <i className="devicon-css3-plain-wordmark colored"></i>;
    const jquery = <i className="devicon-jquery-plain-wordmark colored"></i>;
    const bootstrap = <i className="devicon-bootstrap-plain-wordmark colored"></i>;
    const javascript = <i className="devicon-javascript-plain colored"></i>;
    const react = <i className="devicon-react-original-wordmark colored"></i>;
    const php = <i className="devicon-php-plain colored"></i>;
    const grunt = <i className="devicon-grunt-line-wordmark colored"></i>;
    // const less = <i className="devicon-less-plain-wordmark colored"></i>;
    const wordpress= <i className="devicon-wordpress-plain colored"></i>;
    const git = <i className="devicon-git-plain-wordmark colored"></i>;
    const github = <i className="devicon-github-plain-wordmark colored"></i>;
    const chrome = <i className="devicon-chrome-plain-wordmark colored"></i>;
    const vscode = <i className="devicon-visualstudio-plain colored"></i>;
    const illustrator = <i className="devicon-illustrator-plain colored"></i>;

    return (
      <div>
        <img className='headshot' src={require('../images/headshot.png')} />
        <h3 className="about-title">Skills</h3>
        <div id="skill-box">
        <Row className="skill-row">
          <Col className="skill-col" xs="12" sm="6">
            <span>{html} 90%</span>
            <Progress color='success' value={90} />
          </Col>
          <Col className="skill-col" xs="12" sm="6">
            <span>{css} 90%</span>
            <Progress color='success' value={90} />
          </Col>
        </Row>
        <Row className="skill-row">
          <Col className="skill-col" xs="12" sm="6">
            <span>{bootstrap} 90%</span>
            <Progress color='success' value={90} />
          </Col>
          <Col className="skill-col" xs="12" sm="6">
            <span>{javascript} 80%</span>
            <Progress color='success' value={80} />
          </Col>
        </Row>
        <Row className="skill-row">
          <Col className="skill-col" xs="12" sm="6">
            <span>{jquery} 80%</span>
            <Progress color='success' value={80} />
          </Col>
          <Col className="skill-col" xs="12" sm="6">
            <span>{react} 70%</span>
            <Progress color='primary' value={70} />
          </Col>
        </Row>
        <Row className="skill-row">
          <Col className="skill-col" xs="12" sm="6">
            <span>{wordpress} 70%</span>
            <Progress color='primary' value={70} />
          </Col>
          <Col className="skill-col" xs="12" sm="6">
            <span>{php} 50%</span>
            <Progress color='warning' value={50} />
          </Col>
        </Row>
        </div>
        <h3 className="about-title">Tool Box</h3>
        <div id="tool-box">
          {git}
          {github}
          {chrome}
          {vscode}
          {illustrator}
          {grunt}
        </div>
        <h3 className="about-title">Formal Education</h3>
        <div id="education-box">
          <Row className="skill-row">
            <Col className="skill-col" xs="12" sm="6">
              <img src={require('../images/toronto.png')}/>
              <p>B.A. 2010</p>
            </Col>
            <Col className="skill-col" xs="12" sm="6">
              <img src={require('../images/ryerson.png')}/>
              <p>M.A. 2013</p>
            </Col>
          </Row>
          <h3 className="about-title">Connect</h3>
          <div id="tool-box">
            <a className="media-icons" target="_blank" href="https://www.linkedin.com/in/adamsimonini">
              <img src={require('../images/linkedin.png')}/>
            </a>
            <a className="media-icons" target="_blank" href="https://github.com/adamsimonini">
              <img src={require('../images/github-purple.png')}/>
            </a>
            <a className="media-icons" target="_blank" href="https://codepen.io/ajsim">
              <img src={require('../images/codepen.png')}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
};