import React, { Component } from 'react';
import '../App/App.css';
import axios from "axios";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="homeNav">
          <h4>Movies</h4>
          <h4>Theaters</h4>
        </nav>
        <header className="App-header">
          <h1 className="App-title">CMPS</h1>
          <h5 className="subheading">Cinema Movie Play Schedule</h5>
        </header>
        <p className="App-intro">
          Welcome to CMPS, Your theater and movie source for Washignton, DC!
        </p>

      </div>
    );
  }
}

export default App;
