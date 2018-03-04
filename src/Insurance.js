import React, { Component } from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Container, Row, Col } from 'reactstrap';
import CropCard from './CropCard';

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
    constructor(props){
        super(props);
        this.state = {data: [
                {
                    name: 'CORN', 
                    link: './images/corn.png',
                    active: './image/whitecorn.png'
                },
                {
                    name: 'WHEAT', 
                    link: './images/wheat.png',
                    active: './image/whitewheat.png'
                },
                {
                    name: 'EGGPLANT', 
                    link: './images/corn.png',
                    active: './image/whitecorn.png'
                },
                {
                    name: 'GRAPES', 
                    link: './images/corn.png',
                    active: './image/whitecorn.png'
                },
                {
                    name: 'BANANA', 
                    link: './images/corn.png',
                    active: './image/whitecorn.png'
                }
            ]   
        }
    }

    _onBlur(e){
        e.preventDefault();
    }

  render() {
        let data = this.state
        console.log(data)
    return (
      <div class="pl5" style={{width: "100%"}}>
        <h2 id="insuring" class="tl">Insuring Your Crops</h2> 
            <Container>
                <Row>
                    {this.state.data && this.state.data.map(
                        (obj,index)=>{
                            return <CropCard name={obj.name} link={obj.link} active={obj.active} />
                        }
                    )}
                </Row>
            </Container>

        <h3 id="forcast" class="tl">Insurance Forcast</h3>
        <ReactBootstrapSlider
            value={50}
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
                                <div className="tc">
                                    <span >$90</span><span>$/month</span>
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
                                    <div className="tc">
                                        <span >$140</span><span>$/month</span>
                                    </div>
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
                                    <div className="tc">
                                        <span >$220</span><span>$/month</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                </Row>
      </div>
    );
  }
};