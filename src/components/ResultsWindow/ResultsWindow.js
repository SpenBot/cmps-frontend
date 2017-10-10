import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";

class ResultsWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theater: null,
      movie: null
    }
  }





  componentWillReceiveProps (newProps) {
    let newMovie = this.props.movies.filter(movieId => movieId.tmsId === this.props.movies)[0]
    this.setState({movie: newMovie})
    console.log(`newMovie = ${newMovie}`)
    }





  render() {
      console.log(`Movie Id = ${this.props.movieId}`)
      console.log(`Movie state = ${this.state.movie}`)

      return (
          <div>
            <br/>
              {this.state.movie && this.state.movie.title}
            <br/>
          </div>
      )
  }


}

export default ResultsWindow;
