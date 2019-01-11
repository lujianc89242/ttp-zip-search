import React, { Component } from 'react';
import './ZipCard.css';

class ZipCard extends Component {
    render() {
        // var name has to match with props.
        var {
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

export default ZipCard;
