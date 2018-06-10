import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftNav from './LeftNav';
import Featured from './Featured';
import Work from './Hackathons';
import WebApps from './Hackathons';
import AboutMe from './Hackathons';
import Hackathons from './Hackathons';

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Router>
            <Row>
                <Col xs="12" className="leftNav"><LeftNav /></Col>
                <Col xs="12" sm={{ size: 10, offset: 2 }}>
                <span className="title">Adam Simonini</span>
                <Switch>
                    <Route exact path="/" component={Featured} /> 
                    <Route path="/Featured" component={Featured} /> 
                    <Route path="/Work" component={Work} />
                    <Route path="/WebApps" component={WebApps} />
                    <Route path="/AboutMe" component={AboutMe} />
                    <Route path="/Hackathons" component={Hackathons} />
                </Switch>
                </Col>
            </Row>
        </Router>
      </Container>
    );
  }
}
