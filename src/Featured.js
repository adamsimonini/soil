import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Card from './Card';

export default class Featured extends Component{
    constructor(props){
        super(props);
    }


  render() {
    return (
        <div class="container">
        <Row>
            <Col xs="12" sm="6">
                <Card />
            </Col>
            <Col xs="12" sm="6">
                <Card />
            </Col>
        </Row>
        </div>
    );
  }
};