import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip'

export default class BubbleChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                  type: 'Corn',
                  temperature: 22,
                  rain: 13,
                  yield: 50,
                  top: 40,
                  left: 50,
                  color: '#FCD139',
                  image: './images/whitecorn.png',
                },
                {
                  type: 'Banana',
                  temperature: 22,
                  rain: 13,
                  yield: 75,
                  top: -50,
                  left: 50,
                  color: '#FCD139',
                  image: './images/bananawhite.png',
                },
                {
                  type: 'Wheat',
                  temperature: 22,
                  rain: 13,
                  yield: 100,
                  top: -100,
                  left: 100,
                  color: '#FCD139',
                  image: './images/whitewheat.png',
                },
                {
                  type: 'Eggplant',
                  temperature: 22,
                  rain: 13,
                  yield: 125,
                  position: 'flex-end',
                  left: 150,
                  color: '#FCD139',
                  image: './images/eggwhite.png',
                },
                {
                  type: 'Grapes',
                  temperature: 22,
                  rain: 13,
                  yield: 50,
                  position: '',
                  left: 500,
                  color: '#FF050c',
                  image: './images/grapewhite.png',
                }
              ]
        }
    }

    render() {
        return (
        <div className="chartContainer">
        <div className="chartFront">
            <div className="chartFrontFlex">
            {
                this.state.data && this.state.data.map(function(obj, index) {
                return (
                    <div style={
                        { 
                            borderRadius: obj.yield+'px',
                            width: obj.yield+'px',
                            height: obj.yield+'px',
                            backgroundColor: obj.color,
                            alignSelf: obj.position, 
                        }}>
                        <a data-tip data-for={obj.type}> <img src={require(''+obj.image)}/></a>
                        <ReactTooltip id={obj.type} type='error'>
                            <span style={{fontSize: '14px', color: '#CBC9C9'}}>{obj.type} yield</span>
                            <br />
                            <p style={{fontSize: '16px', color: '#212529'}}>{obj.yield} / acre</p>
                        </ReactTooltip>
                    </div>);
                })
            }
            </div>
        </div>
        <div className="chartBack">
            <div style={{display: 'flex', marginTop: '24px'}}>
            <div style={{marginRight: '10px'}}>
                <div style={{height: 'calc(11%)'}}> </div>
                <div style={{height: '14%'}}> 80 </div>
                <div style={{height: '14%'}}> 40 </div>
                <div style={{height: '14%'}}> 20 </div>
                <div style={{height: '14%'}}> 0</div>
                <div style={{height: '14%'}}>-20 </div>
                <div style={{height: '14%'}}>-40 </div>
                <div> -80 </div>
            </div>
            <div style={{
                borderLeft: '1px solid black',
                borderBottom: '1px solid black',
                height: '400px',
                width: '100%',
                display: 'flex',
                paddingLeft: '10px'
                }}>
                <div style={{borderRight: '1px solid black',width: '25%', height: '100%'}}></div>
                <div style={{borderRight: '1px solid black',width: '25%', height: '100%'}}></div>
                <div style={{borderRight: '1px solid black',width: '25%', height: '100%'}}></div>
                <div style={{borderRight: '1px solid black',width: '25%', height: '100%'}}></div>
            </div>
            </div>
        </div>
        <div style={{height: '40px', display: 'flex', paddingTop: '430px'}}>
            <div style={{width: '35px'}}> </div>
            <div style={{width: '25%', height: '100%', textAlign: 'left'}}>0</div>
            <div style={{width: '25%', height: '100%', textAlign: 'left'}}>1</div>
            <div style={{width: '25%', height: '100%', textAlign: 'left'}}>2</div>
            <div style={{width: '25%', height: '100%', textAlign: 'left'}}>3</div>
            <div style={{width: '25%', height: '100%', textAlign: 'left'}}>4</div>
        </div>
        </div>
        )}
    }