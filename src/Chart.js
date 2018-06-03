import React, { Component } from 'react';
import Selector from './Selector';
import ChartVisible from './ChartVisible';

export default class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{width: "100%"}}>
        <h2>Crop Analysis</h2>
        <div style={{display: 'inline-flex', height: '30px'}}>
          <div style={{position: 'absolute', right: '0px'}}>Quarterly</div>
        </div>
        <div style={{display: 'flex', height: '40px'}}>
          <Selector />
        </div>
        <ChartVisible />
      </div>
    );
  }
};