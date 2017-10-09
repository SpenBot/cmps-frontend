import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class MovieSearch extends Component {

  handleChange(e) {
    let movieResult = e.target.value
    this.props.changeMovieResult(movieResult)
  }

  render() {

    let movies = this.props.movies

    const moviesList = movies.map((movie) => {
      return (
        <option>
          <Link to={`/api/movies/${movie.name}`}> {movie.name} </Link>
        </option>
       )
         console.log({moviesList})
    })
      return (
        <div>
          <select onChange={this.handleChange.bind(this)}>
            {moviesList}
          </select>

        </div>
      )
  }
}

export default MovieSearch;
