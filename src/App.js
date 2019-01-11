import React, { Component } from 'react';
import './App.css';
import SearchZip from './component/SearchZip';

class App extends Component {

  render() {
    // display Cards page   this.state.edit == true

      return (
        <div className="App">
          <header className="App-header">
              <h2>Zip Code Search</h2>
          </header>
          <SearchZip />
        </div>
      );
    }


}

export default App;
