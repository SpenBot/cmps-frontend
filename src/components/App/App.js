import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import '../App/App.css';
import Theaters from '../Theaters/Theaters.js'
import axios from "axios";




//main landing page for search
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // theaters: Theaters,
      // movies: Movies
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
          Welcome to CMPS, Your theater and movie source for Washington, DC!
        </p>

        <div className="theaterMenu">
          <Router>
            <Route path="/api/theaters" render={(props) => {
                  return (
                    <div>
                      
                      <Theaters/>

                    </div>
                  )
                }}
              />
          </Router>

        </div>
      </div>



    );
  }
}

export default App;
