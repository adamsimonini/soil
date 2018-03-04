import React, { Component } from 'react';
import Layout from './Layout.js';
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
        <Layout />
      </div>
    );
  }
}

export default App;
