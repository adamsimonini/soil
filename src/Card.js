import React, { Component } from 'react';
import Galaxy from './images/overwatch.jpg';

export default class Card extends Component {

    render(){
        const hyperlink = {
            color: 'black',
            textDecoration: 'none'
        };

        return(
            <a style={hyperlink} href="www.google.com" target='_blank'>
                <div class="cardGrid">
                    <span className="cardName">Overwatch Team Builder</span>
                    <div data-tilt data-tilt-max="25" className="cardImage">
                        <img className="galaxyImage js-tilt" src={Galaxy} alt="featured project"/>
                    </div>
                    <div className="cardDescription">
                        <p>Lorem ipsum dolor amet brooklyn meditation pabst scenester 90's. 
                            Drinking vinegar flexitarian lo-fi authentic green juice tote bag. 
                            Live-edge cred direct trade health goth flannel. Lomo paleo wayfarers snackwave cred tilde. 
                            Four dollar toast squid selvage occupy forage put a bird on it cred listicle flexitarian slow-carb 90's actually. 
                        </p>
                    </div>
                    <div className="technology">
                        <span>Javascript</span>
                        <span>CSS Grid</span>
                        <span>jQuery</span>
                    </div>
                </div>
            </a>
        );
    }
}