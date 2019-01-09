import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './component/Cards'

class App extends Component {
  constructor(props){
    super(props);
      this.state = {

      zipCode: '',
      edit: false
    };
  }
  handleChange(e){
    this.setState( {zipCode: e.target.value});

  }
  handleSearch(e){
    e.preventDefault();
    this.setState( {edit: true} );
  }
  render() {
    if(this.state.edit){
      return (
        <div className="App">
          <header className="App-header">
              <h2>Zip Code Search1</h2>

              </header>
              zipcode:
              <input type="text" onChange={this.handleChange.bind(this)} onSubmit={this.handleSearch.bind(this)} />
              
              <Cards zipInput={this.state.zipCode}/>
        </div>
      );
    }
    else{
      return(
        <div className="App">
        <header className="App-header">
                <h2>Zip Code Search2</h2>

            </header>
            zipcode:
            <input type="text" onSubmit={this.handleSearch.bind(this)} />
            <button onClick={this.handleSearch.bind(this)}>Search</button>
      </div>);


    }

  }
}

export default App;
