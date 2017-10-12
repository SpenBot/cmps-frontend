import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import axios from "axios";
import moment from 'moment';
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
      user: {
        username: localStorage.getItem('user'),
        photo_url: localStorage.getItem('photo')
      },
      theaterResult: null,
      movieId: null,
      apiMovies: [],
      searchPhrase: null,
    }
    this.changeTheaterResult = this.changeTheaterResult.bind(this)
    this.changeMovieId = this.changeMovieId.bind(this)
    this.logOutUser = this.logOutUser.bind(this)
  }

  componentDidMount() {

    axios.get('https://localhost:4000/api/theaters').then((res) => {
      this.setState({theaters: res.data})
        }).catch((err) => {
          console.log(err)
    })

    new Date()
       console.log(new Date())
       let currentDate = moment(new Date()).format('YYYY-MM-DD')
       console.log(`Current date is ${currentDate}`)

    // axios.get(`http://data.tmsapi.com/v1.1/movies/showings?startDate=${currentDate}&zip=20005&radius=3&api_key=z2ud6x8tjayerzhpab34c8ne`)
    //    .then((res) => {
    //      this.setState({apiMovies: res.data})
    //    })

    axios.get('https://cmps-backend.herokuapp.com/api/movies')
       .then((res) => {
         console.log(res)
         this.setState({movies: res.data})
         console.log(this.state.movies)
       })
       .catch((err) => {
         console.log(err)
     })

}

  changeTheaterResult(theaterResult) {
    this.setState({theaterResult})
  }

  changeMovieId(movieId) {
    this.setState({movieId})
  }

  logOutUser(e) {
    e.preventDefault();
    this.setState({user: ""})
    localStorage.setItem("user", "")
    localStorage.setItem("photo", "")
    console.log("User logged out.")
  }

  signInUser(e) {
    e.preventDefault()
    axios.get(`https://cmps-backend.herokuapp.com/api/users/${this.state.searchPhrase}`)
      .then((res) => {
        this.setState({user: res.data})
        localStorage.setItem("user", res.data.username)
        localStorage.setItem("photo", res.data.photo_url)
        console.log(`User ${this.state.user.username} signed in.`)
      })
    }

  handleSearchInput(e) {
    this.setState({
      searchPhrase: e.target.value
    })
  }

  render() {

    console.log(`User State in App.js = ${this.state.user.username}`)


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
                        <MovieSearch changeMovieId={this.changeMovieId} apiMovies={this.state.apiMovies}/>
                        <ResultsWindow theaterResult={this.state.theaterResult} movieId={this.state.movieId} apiMovies={this.state.apiMovies}/>
                        <UserSidebar {...props} user={this.state.user} logOutUser={this.logOutUser}/>
                      {/* /////////// sign in button ////////////// */}
                        <br/>
                        <h3>Sign In</h3>
                        <form onSubmit={(e) => this.signInUser(e)}>
                          <textarea onChange={(e) => this.handleSearchInput(e)}></textarea>
                          <input type="submit" value="Sign In"/>
                        </form>
                        {/* /////////// sign in button ////////////// */}

                        {/* /////////// sign out button ////////////// */}
                        <br/>
                        <h3>{this.state.user && this.state.user.username}</h3>
                        <br/>
                        <form onSubmit={(e) => this.logOutUser(e)}>
                          <input type="submit" value="Sign Out"/>
                        </form>
                        {/* /////////// sign out button ////////////// */}
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
