import React, { Component } from 'react';
import axios from 'axios';
import './Cards.css';
import ZipLocation from './ZipLocation';

class Cards extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [
             {
                 RecordNumber: "1",
                 LocationText: "New York, NY",
                 State: "State 1",
                 Location: "Location 1",
                 EstimatedPopulation: "Population 3",
                 TotalWages: "Total wages 1",
             },
             {
                 RecordNum: "2",
                 LocationText: "Queens, NY",
                 State: "State 2",
                 Location: "Location 2",
                 EstimatedPopulation: "Population 2",
                 TotalWages: "Total wages 2",
             },
             {
                 RecordNum: "3",
                 LocationText: "Brooklyn, NY",
                 State: "State 3",
                 Location: "Location 3",
                 EstimatedPopulation: "Population 3",
                 TotalWages: "Total wages 43",
             },
             {
                 RecordNum: "4",
                 LocationText: "Manhattan, NY",
                 State: "State 4",
                 Location: "Location 4",
                 EstimatedPopulation: "Population 4",
                 TotalWages: "Total wages 4",
             }
         ]
      };
    }
    componentDidMount() {
      axios.get('http://ctp-zip-api.herokuapp.com/zip/11355')
          .then(response => {
              //var wanted =
              // var wanted = ["LocationText", "State", "Location", "EstimatedPopulation", "TotalWages"];
              //var result = response.data;
              console.log(response.data);
              this.setState({ data: response.data });
          })
          .catch(err => console.log(err));

    }

    // fetchLocationData() {
    //     var input = this.props.ZipInput;
    //     axios.get("http://ctp-zip-api.herokuapp.com/zip/10061")
    //         .then(response => {
    //             //var wanted =
    //             // var wanted = ["LocationText", "State", "Location", "EstimatedPopulation", "TotalWages"];
    //             var result = response.data;
    //             // console.log(result);
    //             this.setState({ result });
    //         })
    //         .catch(err => console.log(err));
    //
    // }
  // <ul>{this.state.data[0]}</ul>
    render() {
        var zipInfo = this.state.data.map((location) =>
            <ZipLocation data={location} key={location.RecordNumber} />
        );

        //<ul>{this.state.data[0].State}</ul>
        return (
          <div>

            <ul>{zipInfo}</ul>
          </div>
        );

  }
}

export default Cards
