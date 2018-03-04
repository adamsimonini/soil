import React, { Component } from 'react';

export default class CropCard extends Component{

    constructor(props){
        super(props);
        this.state = {active: false};
    }

    componeneDidUpdate() {

    }

    _onClick(){
        this.setState({active: true});

    }

    _onBlur(){
        console.log('on blur');
        if (this.state && this.state.active) {
            this.setState({
                active: false
            });
        }
    }

    render() {  
        return (
            <div tabIndex={0}
                onBlur={this._onBlur.bind(this)} onClick={this._onClick.bind(this)} xs="6" md="2" className={(this.state.active) ? 'active crop' : 'crop'}>
            <img src={ require('' + this.props.link) } />
                {this.props.name}
            </div>
        )
    }
}
