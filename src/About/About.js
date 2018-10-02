import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './About.css';
import { Row, Col } from 'reactstrap';
import Typist from 'react-typist';

export default class AboutMe extends Component{

  state = {
    skills: [
      {skill: "html", level:90},
      {skill: "css", level:90},
      {skill: "bootstrap", level:90},
      {skill: "javascript", level:80},
      {skill: "jquery", level:80},
      {skill: "react", level:70},
      {skill: "wordpress", level:70},
      {skill: "php", level:50},
    ]
  }

  animatedProgress = () => {
    this.setState({

    });
  }

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

    // let start = 0;
    // function animate(max){
    //   while (start < max){
    //     console.log(start);
    //     start++;
    //   }
    //   return start;
    // }

    return (
      <div>
        <Row>
          <Col sm="6" xs="12">
            <img className='headshot' alt="Adam Simonini" src={require('../images/headshot.png')} />
          </Col>
          <Col id="full-name" sm="6" xs="12">
            <h1>Adam Simonini</h1>
            <Typist cursor={{ 
              show: true,
              blink: true,
              element: '|',
              hideWhenDone: true,
              hideWhenDoneDelay: 1000,
              }} startDelay={2000}
            >
              <spam>Teamplayer</spam>
              <Typist.Backspace count={10} delay={1500} />
              <spam>Creative</spam>
              <Typist.Backspace count={9} delay={1000} />
              <spam className="Cursor--blinking">Developer</spam>
            </Typist>
          </Col>
        </Row>

        <Row>
          <Col md="8" sm="12">
            <h3 className="about-title">Skills</h3>
            <div id="skill-box">
              <Row className="skill-row">
                <Col className="skill-col" xs="12" sm="6">
                  <span>{html} 90%</span>
                  <Progress animated striped color='success' value={this.state.skills[0].level} />
                </Col>
                <Col className="skill-col" xs="12" sm="6">
                  <span>{css} 90%</span>
                  <Progress animated striped color='success' value={90} />
                </Col>
              </Row>
              <Row className="skill-row">
                <Col className="skill-col" xs="12" sm="6">
                  <span>{bootstrap} 90%</span>
                  <Progress animated striped color='success' value={90} />
                </Col>
                <Col className="skill-col" xs="12" sm="6">
                  <span>{javascript} 80%</span>
                  <Progress animated striped color='success' value={80} />
                </Col>
              </Row>
              <Row className="skill-row">
                <Col className="skill-col" xs="12" sm="6">
                  <span>{jquery} 80%</span>
                  <Progress animated striped color='success' value={80} />
                </Col>
                <Col className="skill-col" xs="12" sm="6">
                  <span>{react} 70%</span>
                  <Progress animated striped color='primary' value={70} />
                </Col>
              </Row>
              <Row className="skill-row">
                <Col className="skill-col" xs="12" sm="6">
                  <span>{wordpress} 70%</span>
                  <Progress animated striped color='primary' value={70} />
                </Col>
                <Col className="skill-col" xs="12" sm="6">
                  <span>{php} 50%</span>
                  <Progress animated striped color='warning' value={50} />
                </Col>
              </Row>
            </div>
          </Col>

          <Col md="4" sm="12">
            <h3 className="about-title">Tool Box</h3>
            <Row id="toolbox-row">
              <Col className="tool-box" sm="12" xs="12">
                {git}
                {github}
                {chrome}
              </Col>
              <Col className="tool-box" sm="12" xs="12">
                {vscode}
                {illustrator}
                {grunt}
              </Col>
            </Row>
          </Col>
        </Row>

        <h3 className="about-title">Formal Education</h3>
        <div id="education-box">
          <Row className="skill-row">
            <Col className="skill-col" xs="12" sm="6">
              <img alt="University of Toronto" src={require('../images/toronto.png')}/>
              <p><strong>B.A. 2010</strong></p>
            </Col>
            <Col className="skill-col" xs="12" sm="6">
              <img alt="Ryerson University" src={require('../images/ryerson.png')}/>
              <p><strong>M.A. 2013</strong></p>
            </Col>
          </Row>
          <h3 className="about-title">Connect</h3>
          <div className="tool-box">
            <a className="media-icons" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adamsimonini">
              <img alt="LinkedIn" src={require('../images/linkedin.png')}/>
            </a>
            <a className="media-icons" target="_blank" rel="noopener noreferrer" href="https://github.com/adamsimonini">
              <img alt="Github" src={require('../images/github-purple.png')}/>
            </a>
            <a className="media-icons" target="_blank" rel="noopener noreferrer" href="https://codepen.io/collection/ArWxjY/">
              <img alt="CodePen" src={require('../images/codepen.png')}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
};