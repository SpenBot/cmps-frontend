import React, {Component} from 'react';
import axios from "axios";
import moment from 'moment';
import MovieSearch from '../MovieSearch/MovieSearch.js'
import ResultsWindow from '../ResultsWindow/ResultsWindow.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movieId: null,
      apiMovies: [],
      searchPhrase: null
    }
    this.changeMovieId = this.changeMovieId.bind(this)
  }



  changeMovieId(movieId) {
   this.setState({movieId})
  }


  componentDidMount() {
    new Date()
    console.log(new Date())
    let currentDate = moment(new Date()).format('YYYY-MM-DD')
    console.log(`Current date is ${currentDate}`)

    axios.get(`https://data.tmsapi.com/v1.1/movies/showings?startDate=${currentDate}&zip=20005&radius=3&api_key=nhg4dwe7n5rj5xbxfnxms88b`)
       .then((res) => {
         this.setState({apiMovies: res.data})
       })
     }


  handleSearchInput(e) {
    this.setState({searchPhrase: e.target.value})
  }

  render() {
    return (

        <div className="App">

          <header>
            <div className="HeaderLeft">
              <h1>CMPS</h1>
              <h5>movie times for today in D.C.</h5>
            </div>
            <div className="HeaderRight">
              <a href="#">LOGIN</a>
              <a href="#">SIGNUP</a>
            </div>
          </header>

          <main>

            <nav className="homeNav">
              <a href='/'>HOME</a>
              <vl></vl>
              <a href='users'>PROFILE</a>
              <hr></hr>
            </nav>

            <div className="subMain">

              <div className="AppWindow">
                <p>SELECT A MOVIE TO SEE SHOWTIMES</p>
                <hr></hr>
                <MovieSearch
                  changeMovieId={this.changeMovieId}
                  apiMovies={this.state.apiMovies}
                />
                <ResultsWindow
                  theaterResult={this.state.theaterResult}
                  movieId={this.state.movieId}
                  apiMovies={this.state.apiMovies}
                />
              </div>
              
            </div>

          </main>

        </div>

      )
    }
}

export default App;
