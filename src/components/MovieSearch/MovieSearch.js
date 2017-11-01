import React, {Component} from 'react';
import './MovieSearch.css';

class MovieSearch extends Component {

  handleChange(e) {
    let movieId = e.target.value
    this.props.changeMovieId(movieId)
  }

  render() {
    let movies = this.props.apiMovies
    const moviesList = movies.map((movie) => {
      return (
        <option id="value" value={movie.tmsId}>
            {movie.title}
        </option>
       )
    })

      return (
        <div>

          <select id="drop-down" onChange={this.handleChange.bind(this)}>

            {moviesList}
          </select>

        </div>
      )
  }
}

export default MovieSearch;
