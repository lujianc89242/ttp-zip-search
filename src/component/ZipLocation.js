import React, { Component } from 'react';
import './ZipLocation.css';

class ZipLocation extends Component {
    render() {
        var {
            State,
            Location,
            Population,
            Totalwages,
        } = this.props.data;
        return ( 
            <div>
                <p>State</p>
            </div>
            );
        
    }

}

export default ZipLocation;