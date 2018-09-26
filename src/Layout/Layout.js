import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LeftNav from '../Navigation/LeftNav';
import Featured from '../Featured/Featured';
import Work from '../Work/Work';
import WebApps from '../WebApps';
import AboutMe from '../About/About';
import Hackathons from '../Hackathons/Hackathons';

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <Router>
            <Row>
                <Col xs="12" className="leftNav"><LeftNav /></Col>
                <Col xs="12" sm={{ size: 10, offset: 2 }} style={{marginTop: 70}}>
                {/* <span className="title">Adam Simonini</span> */}
                <Switch>
                    <Route key="0" exact path="/abv" component={Featured}/> 
                    <Route key="1" path="/Featured" component={Featured}/> 
                    <Route key="2" path="/Work" component={Work}/>
                    <Route key="3" path="/WebApps" component={WebApps} />
                    <Route key="4" path="/AboutMe"  component={AboutMe}/>
                    <Route key="5" path="/Hackathons" component={Hackathons}/>
                </Switch>
                </Col>
            </Row>
        </Router>
      </Container>
    );
  }
}
