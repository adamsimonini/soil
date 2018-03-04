import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import Selector from './Selector';
import ChartVisible from './ChartVisible';
const data = {
  labels: ['January'],
  datasets: [
    {
      label: 'Test Data',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        {x:100,y:10,r:50}
      ]
    },
    {
      label: 'Test Data',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [
        {x:0,y:100,r:50}
      ]
    }
  ]
};

export default class Chart extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{width: "100%"}}>
        <h2>Crop Analysis</h2>
        <div style={{display: 'flex'}}>
          <input type="text" onKeyPress={this.handleKeyPress} />
          <Selector />
        </div>
        <ChartVisible />
      </div>
    );
  }
};