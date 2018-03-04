import React, { Component } from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Container, Row, Col } from 'reactstrap';

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
      </div>
    );
  }
};