import React, { Component } from 'react';
import './ZipLocation.css';

class ZipLocation extends Component {
    render() {
        // var name has to match with props.
        var {
            RecordNumber,
            LocationText,
            State,
            Location,
            EstimatedPopulation,
            TotalWages,
        } = this.props.data;
        return (
            <li className="Ziplocation">
                <h1>{LocationText}</h1>
                <p>State: {State}</p>
                <p>Location: {Location}</p>
                <p>Population: {EstimatedPopulation}</p>
                <p>Total Wages: {TotalWages}</p>

            </li>
        );

    }

}

export default ZipLocation;
