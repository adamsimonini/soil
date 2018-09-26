import React from 'react';
import Tilt from 'react-tilt';
import './Card.css';

const hyperlink = {
            color: 'black',
            textDecoration: 'none'
}

const Card = ({props}) => (
    <a style={hyperlink} href="www.google.com" target='_blank'>
        <div className="cardGrid">
            <span className="cardName">{props.name}</span>
            <Tilt className="Tilt" options={{ max:30, scale:1.05}} style={{ height: 250, width: 200 }}>
                <img className="galaxyImage js-tilt" src={props.image} alt="featured project"/>
            </Tilt>
            <div className="cardDescription">
                <p>{props.description}</p>
            </div>
            <div className="technology">
                <span>{props.technology[0]}</span>
                <span>{props.technology[1]}</span>
                <span>{props.technology[2]}</span>
                <span>{props.technology[3]}</span>
            </div>
        </div>
    </a>
);

export default Card;