import React, { Component } from 'react';
import './Cards.css';
import ZipLocation from './ZipLocation'

class Cards extends Component{
    constructor(props) {
        super(props);
      this.state = {
          data: [
              {
                  LocationText: "New York,NY",
                  State: "State 1",
                  Location: "Location 1",
                  Population: "Population 1",
                  Totalwages: "Total wages 1",
              },
              {
                  LocationText: "Queens, NY",
                  State: "State 2",
                  Location: "Location 2",
                  Population: "Population 2",
                  Totalwages: "Total wages 2",
              },
              {
                  LocationText: "Brooklyn, NY",
                  State: "State 3",
                  Location: "Location 3",
                  Population: "Population 3",
                  Totalwages: "Total wages 3",
              }
          ]
      };
  }
    render() {
        var zipInfo = this.state.data.map((location) =>
            <ZipLocation data={location} key={location.LocationText} />
        );
      return (
          <div>
              <p>{zipInfo}</p>
          </div>
      );

  }
}

export default Cards

