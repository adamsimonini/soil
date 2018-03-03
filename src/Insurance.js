import React, { Component } from 'react';
import ReactBootstrapSlider from 'react-bootstrap-slider';

export default class Insurance extends Component{
  render() {
    return (
      <div style={{width: "100%"}}>
        <h2>Insurance Analysis</h2> 
        <ReactBootstrapSlider
            value={100}
            // slideStop={() => ()}
            step={1}
            max={100}
            min={0}
            orientation="horizontal"
            reversed={true}
        />  
      </div>
    );
  }
};