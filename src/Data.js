import React, { Component } from 'react';

export default class Data extends Component {

    componentDidMount() {
        let api = "http://climatedataapi.worldbank.org/climateweb/rest/v1/country/mavg/pr/2020/2039/CUB.JSON";
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


    render() {
        return (
            <div>DATA</div>
        );
    }
  }
