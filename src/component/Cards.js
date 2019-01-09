import React, { Component } from 'react';
import axios from 'axios';
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
    
    fetchLocationData() {
        var input = this.props.ZipInput;
        axios.get("http://ctp-zip-api.herokuapp.com/zip/" + input.value)
            .then(response => {
                //var wanted = 
                var result = response.data;
                console.log(this.setState({ data: result }));
            })
            .catch(err => console.log(err));

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

