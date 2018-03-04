import React, { Component } from 'react';
import {Bubble} from 'react-chartjs-2';
import Selector from './Selector';

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
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      let api = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/pr/2020/2039/CAN.JSON";
        fetch(api)
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                console.log(error);
            }
          )
          api = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/tas/2020/2039/CUB.JSON";
          fetch(api)
            .then(res => res.json())
            .then(
              (result) => {
                  console.log(result);
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                  console.log(error);
              }
            )
    }
  }
  render() {
    return (
      <div style={{width: "100%"}}>
        <h2>Crop Analysis</h2>
        <div style={{display: 'flex'}}>
          <input type="text" onKeyPress={this.handleKeyPress} />
          <Selector />
        </div>
        <div style={{position: 'absolute'}}>
        <div style={{top: '10px',position: 'relative', width: '40px', height: '50px', backgroundColor: '#fbce47'}}>
          <img src=''/>
        </div>
        <div style={{top: '10px',position: 'relative', width: '40px', height: '50px',  backgroundColor: '#fc1711'}}>
          <img src=''/>
        </div>
        <div style={{top: '10px',position: 'relative', width: '40px', height: '50px',  backgroundColor: '#fc1711'}}>
          <img src=''/>
        </div>
        <div style={{top: '10px',position: 'relative', width: '40px', height: '50px',  backgroundColor: '#fc1711'}}>
          <img src=''/>
        </div>
        <div style={{top: '10px',position: 'relative', width: '40px', height: '50px',  backgroundColor: '#fc1711'}}>
          <img src=''/>
        </div>
        </div>
        <div style={{display: 'flex', marginTop: '24px'}}>
          <div style={{marginRight: '10px'}}>
            <div style={{height: 'calc(11%)'}}> </div>
            <div style={{height: '14%'}}> 20 </div>
            <div style={{height: '14%'}}> 15 </div>
            <div style={{height: '14%'}}> 10 </div>
            <div style={{height: '14%'}}> 5</div>
            <div style={{height: '14%'}}> 0 </div>
            <div style={{height: '14%'}}> -5 </div>
            <div> -10 </div>
          </div>
          <div style={{
              borderLeft: '1px solid black',
              borderBottom: '1px solid black',
              height: '400px',
              width: '100%',
              display: 'flex',
            }}>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
            <div style={{borderRight: '1px solid black',width: '7%', height: '100%'}}></div>
          </div>
        </div>
        <div style={{height: '40px',display: 'flex',}}>
            <div style={{width: '35px'}}> </div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>1</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>2</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>3</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>4</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>5</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>6</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>7</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>8</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>9</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>10</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>11</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>12</div>
            <div style={{width: '7%', height: '100%', textAlign: 'left'}}>13</div>
        </div>
      </div>
    );
  }
};