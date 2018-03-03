import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Chart from './Chart';
import LeftNav from './LeftNav';

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="12" sm="2"><LeftNav /></Col>
          <Col xs="12" sm="10"><Chart /></Col>
        </Row>
      </Container>
    );
  }
}
