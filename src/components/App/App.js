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
      user: null,
      theaterResult: null,
      movieId: null,
      apiMovies: null
    }
    this.changeTheaterResult = this.changeTheaterResult.bind(this)
    this.changeMovieResult = this.changeMovieResult.bind(this)
  }



  componentDidMount() {
    axios.get('https://localhost:4000/api/theaters').then((res) => {
      console.log(res)
      this.setState({theaters: res.data})
      console.log(this.state.theaters)
    }).catch((err) => {
      console.log(err)
    })


    axios.get('http://data.tmsapi.com/v1.1/movies/showings?startDate=2017-10-10&zip=20005&radius=3&api_key=z2ud6x8tjayerzhpab34c8ne')
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




     axios.get('https://cmps-backend.herokuapp.com/api/users/MovieGuy999')

       .then((res) => {
         this.setState({user: res.data})
     })
     .catch((err) => {
       console.log(err)
     })

  }



  changeTheaterResult(theaterResult) {
    this.setState({theaterResult})
  }

  changeMovieResult(movieResult) {
    this.setState({movieResult})
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

              <Route path="/userpage" component={UserPage} />

              <Route path="/" render={() => {
                    return (
                      <div>
                        <MovieSearch changeMovieResult={this.changeMovieResult} apiMovies={this.state.apiMovies}/>
                        <TheaterSearch changeTheaterResult={this.changeTheaterResult} theaters={this.state.theaters}/>
                        <ResultsWindow theaterResult={this.state.theaterResult} movieResult={this.state.movieResult} movies={this.state.movies}/>
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



//
