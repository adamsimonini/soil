import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Data from './Data';
import Chart from './Chart';
import crops from './crops.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={crops} alt="logo" />
          <h1 className="App-title">Crop Analysis</h1>
        </header>
        {/* <Data /> */}
        <Chart />
      </div>
    );
  }
}

export default App;
