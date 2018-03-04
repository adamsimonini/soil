import React, { Component } from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Container, Row, Col } from 'reactstrap';

    const greenLine = {
        width: '100%',
        height: '10px',
        backgroundColor: 'green'
    };

    const purpleLine = {
        width: '100%',
        height: '10px',
        backgroundColor: 'purple'
    };

    const blueLine = {
        width: '100%',
        height: '10px',
        backgroundColor: 'blue'
    };

export default class Insurance extends Component{
  render() {
    return (
      <div class="pl5" style={{width: "100%"}}>
        <h2 id="insuring" class="tl">Insuring Your Crops</h2> 
            <Container>
                <Row>
                        <Col xs="6" md="2" className="crop">
                            <img src={ require('./images/corn.png') } />
                            CORN
                        </Col>
                        <Col xs="6" md="2" className="crop">
                            <img src={require('./images/wheat.png')} />
                            WHEAT
                        </Col>
                        <Col xs="6" md="2" className="crop">
                            <img src={require('./images/eggplant.png')} />
                            EGGPLANT
                        </Col>
                        <Col xs="6" md="2" className="crop">
                            <img src={require('./images/grape.png')} />
                            GRAPES
                        </Col>
                        <Col xs="6" md="2" className="crop">
                            <img src={require('./images/banana.png')} />
                            BANANA
                        </Col>
                </Row>
            </Container>

        <h3 id="forcast" class="tl">Insurance Forcast</h3>
        <ReactBootstrapSlider
            value={100}
            // slideStop={() => ()}
            step={1}
            max={100}
            min={0}
            orientation="horizontal"
            reversed={true}
        /> 

        <h3 id="purchase" class="tl">Purchase Insurance Plan</h3>
        <p className="tl">The following are recommended insurance plans based on your crop of choice:</p>
                      <Row className="purchaseRow mb3">
                        <Col xs="4">
                            <div className="plan">
                                <div style={greenLine} ></div>
                                <div className="innerDiv">
                                    <p> Basic Yield Protection</p>
                                    <p>Covers 30% loss of miniumum projected crop yield due to drought</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="plan">
                            <div style={purpleLine} ></div>
                                <div className="innerDiv">
                                    <p>Best Value Yield Protection</p>
                                    <p>Covers 80% loss of miniumum projected crop yield due to drought, 
                                        natural disasters, and pests</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs="4">
                            <div className="plan">
                                <div style={blueLine} ></div>
                                <div className="innerDiv">
                                    <p>Premium Yield Protection</p>
                                    <p>Covers 100% loss of miniumum projected crop yield due to drought, 
                                        natural disasters, and pests</p>
                                </div>
                            </div>
                        </Col>
                </Row>
      </div>
    );
  }
};