import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Data from './Data';
import Selector from './Selector';
import Chart from './Chart';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Data /> */}
        <Selector />
        <Chart />
      </div>
    );
  }
}

export default App;
