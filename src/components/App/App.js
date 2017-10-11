import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import axios from "axios";

// import TheaterSearch from '../TheaterSearch/TheaterSearch.js';
// import MovieSearch from '../MovieSearch/MovieSearch.js';
import ResultsWindow from '../ResultsWindow/ResultsWindow.js';
import Layout from '../Layout/Layout.js';
import UserSidebar from '../UserSidebar/UserSidebar.js';
import UserPage from '../UserPage/UserPage.js';

import '../App/App.css';





//main landing page for search
class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      theaters: [],
      movies: [],
      user: {
        username: null,
        photo_url: null
      },
      theaterResult: null,
      movieId: null,
      apiMovies: []
    }
  }




  componentDidMount() {

    axios.get('http://data.tmsapi.com/v1.1/movies/showings?startDate=2017-10-11&zip=20005&radius=3&api_key=z2ud6x8tjayerzhpab34c8ne')
    .then((res) => {
      this.setState({apiMovies: res.data})
    })
  }

  render() {

    let moviesApi = this.state.apiMovies.map((movie) => {
      return (
        movie.title
      )
    })

    return (
      <Router>
        <div className="App">
          <Layout />
            <Switch>
              <Route path="/users" render={(props) => {
                return(
                <div>
                  <UserPage user={this.state.user}/>
                </div>
              )
            }}
          />

              <Route path="/" render={(props) => {
                    return (
                      <div>
                        {/* <MovieSearch changeMovieId={this.changeMovieId} apiMovies={this.state.apiMovies}/> */}

                        <ResultsWindow theaterResult={this.state.theaterResult} movieId={this.state.movieId} apiMovies={this.state.apiMovies}/>
                        <UserSidebar
                          {...props}
                          user={this.state.user}/>

                      </div>
                    )
                }}
              />

            </Switch>
          </div>
        </Router>

    );
  }
}
export default App;
