import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import axios from "axios";

import TheaterSearch from '../TheaterSearch/TheaterSearch.js';
import MovieSearch from '../MovieSearch/MovieSearch.js';
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
      user: [],
      theaterResult: null,
      movieId: null,
      apiMovies: []
    }
    this.changeTheaterResult = this.changeTheaterResult.bind(this)
    this.changeMovieId = this.changeMovieId.bind(this)
  }




  componentDidMount() {

    axios.get('https://localhost:4000/api/theaters').then((res) => {
      console.log(res)
      this.setState({theaters: res.data})
      console.log(this.state.theaters)
    }).catch((err) => {
      console.log(err)
    })


    axios.get('http://data.tmsapi.com/v1.1/movies/showings?startDate=2017-10-11&zip=20005&radius=3&api_key=z2ud6x8tjayerzhpab34c8ne')
    .then((res) => {
      this.setState({apiMovies: res.data})
    })


    axios.get('https://cmps-backend.herokuapp.com/api/movies')
       .then((res) => {
         console.log(res)
         this.setState({movies: res.data})
         console.log(this.state.movies)
       })
       .catch((err) => {
         console.log(err)
     })

    //  axios.get('https://cmps-backend.herokuapp.com/api/users/MovieGuy999')
    //    .then((res) => {
    //      this.setState({user: res.data})
    //  })
    //  .catch((err) => {
    //    console.log(err)
    //  })

  }




  changeTheaterResult(theaterResult) {
    this.setState({theaterResult})
  }

  changeMovieId(movieId) {
    this.setState({movieId})
  }






  render() {

    let moviesApi = this.state.apiMovies.map((movie) => {
      return (
        movie.title
      )

    }  )


    return (

      <Router>

        <div className="App">

          <Layout />

            <Switch>

              <Route path="/userpage" render={(props) => {
                return(
                <div>
                  <UserPage user={this.state.user}/>
                </div>
              )
            }}
          />

              <Route path="/" render={() => {
                    return (
                      <div>
                        <MovieSearch changeMovieId={this.changeMovieId} apiMovies={this.state.apiMovies}/>
                        {/* <TheaterSearch changeTheaterResult={this.changeTheaterResult} theaters={this.state.theaters}/> */}
                        <ResultsWindow theaterResult={this.state.theaterResult} movieId={this.state.movieId} apiMovies={this.state.apiMovies}/>
                        <UserSidebar user={this.state.user}/>

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
