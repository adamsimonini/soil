import React, { Component } from 'react';
import Adam from '../images/adam.png';

export default class AboutMe extends Component{

  render() {
    return (
      <div className="main-screen">
        <div className="full-name">
          <span>A</span>
          <span>D</span>
          <span>A</span>
          <span>M</span>
          <span></span>
          <span>S</span>
          <span>I</span>
          <span>M</span>
          <span>O</span>
          <span>N</span>
          <span>I</span>
          <span>N</span>
          <span>I</span>
        </div>
        <div className='aboutMeFlex'>
          <img id="" className="personalPhoto" src={Adam} alt="Adam Simonini"/>
          <img id="" className="personalPhoto" src={Adam} alt="Adam Simonini"/>
          <img id="" className="personalPhoto" src={Adam} alt="Adam Simonini"/>
          <img id="" className="personalPhoto" src={Adam} alt="Adam Simonini"/>
        </div>
      </div>
    );
  }
};