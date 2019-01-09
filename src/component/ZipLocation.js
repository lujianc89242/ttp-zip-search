import React, { Component } from 'react';
import './ZipLocation.css';

class ZipLocation extends Component {
    render() {
        var {
            LocationText,
            State,
            Location,
            Population,
            Totalwages,
        } = this.props.data;
        return ( 
            <div>
                <h1 className="cryptocurrency-name">{LocationText}</h1>
                <p>State: {State}</p>
                <p>Location: {Location}</p>
                <p>Population: {Population}</p>
                <p>Total Wages: {Totalwages}</p>

            </div>
            );
        
    }

}

export default ZipLocation;