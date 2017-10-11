import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import '../Layout/Layout.css'
import axios from "axios";

class ResultsWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theater: null,
      movie: null
    }
  }





  // componentWillReceiveProps (newProps) {
  //   let newMovie = this.props.apiMovies.filter(movieId => movieId.tmsId === this.props.apiMovies)[0]
  //   this.setState({movie: newMovie})
  //   console.log(`newMovie = ${newMovie}`)
  //   }


  componentWillReceiveProps (newProps) {
    let newMovie = this.props.apiMovies.find(movieId => movieId.tmsId === newProps.movieId)
    this.setState({movie: newMovie})
    console.log(`newMovie = ${newMovie}`)
  }



  render() {
      console.log(`Movie Id = ${this.props.movieId}`)
      console.log(`Movie state = ${this.state.movie}`)


      let theatersOfMovie = ""

      if (this.state.movie) {
        theatersOfMovie = this.state.movie.showtimes.map((showtime) => {
        return (
          <div>
          <h4>{showtime.theatre.name}</h4>
          <h4>{showtime.dateTime}</h4>
          </div>
        )
      })}



      return (
          <div id='list'>
            <br/>
              {this.state.movie && this.state.movie.title}
            <br/>
              {this.state.movie && this.state.movie.releaseYear}
            <br/>
            {this.state.movie && this.state.movie.directors}
            <br/>
            {theatersOfMovie}
            <br/>
          </div>
      )
  }


}

export default ResultsWindow;
