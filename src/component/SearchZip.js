import React, { Component } from 'react';
import axios from 'axios';
import './SearchZip.css';
import ZipCard from './ZipCard';

class SearchZip extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          zipCode: ""
      };
    }

    // componentDidMount() {

    // }

    handleChange(e){
      e.preventDefault();
      this.setState( {zipCode: e.target.value});
    }

    handleSearch(e){
      e.preventDefault();
      // this.state.edit ? this.setState( {edit: false}) : this.setState( {edit: true});
      axios.get('http://ctp-zip-api.herokuapp.com/zip/'+ this.state.zipCode)
          .then(response => {
              //var wanted =
              // var wanted = ["LocationText", "State", "Location", "EstimatedPopulation", "TotalWages"];
              //var result = response.data;
              console.log(response.data);
              this.setState({ data: response.data });
          })
          .catch(err => console.log(err));


    }

    render() {
        var zipInfo = this.state.data.map((location) =>
            <ZipCard data={location} key={location.RecordNumber} />
        );

        //<ul>{this.state.data[0].State}</ul>
        return (
          <div>
            zipcode:
            <input type="text" onChange={this.handleChange.bind(this)} />
            <button onClick={this.handleSearch.bind(this)}>Search</button>
            <ul>{zipInfo}</ul>
          </div>

        );

  }
}

export default SearchZip
