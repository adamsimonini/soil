import React, { Component } from 'react';
import Layout from './Layout.js';
import LeftNav from './LeftNav';
import Data from './Data';
import Chart from './Chart';
import Leaf from './images/Leaf.png';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

export default App;