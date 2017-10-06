import React, { Component } from 'react';
import '../App/App.css';
import axios from "axios";

const theTheaters = [
  {
    name: "Regal Cinema",
    address: "123 Fake Street",
    numTheaters: 3
  },
  {
    name: "VA",
    address: "246 Fake Street",
    numTheaters: 8
  }
]

const theMovies = [
  {
    name: "Lion King",
    rating: "PG",
    showTime: "8:30pm"
  },
  {
    name: "It",
    rating: "R",
    showTime: "9:30pm"
  }
]

//main landing page for search
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theaters: theTheaters,
      movies: theMovies
    }
  }






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
