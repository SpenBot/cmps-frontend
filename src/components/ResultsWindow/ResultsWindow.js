import React, {Component} from 'react';

class ResultsWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theater: null,
      movie: null
    }
  }

  componentWillReceiveProps (newProps) {
    let newMovie = this.props.apiMovies.find(movieId => movieId.tmsId === newProps.movieId)
    this.setState({movie: newMovie})
  }

  render() {
    let theatersOfMovie = ""

    if (this.state.movie) {
      theatersOfMovie = this.state.movie.showtimes.map((showtime) => {
        return (
          <div>
          <h4>{showtime.theatre.name}</h4>
          <h4>{showtime.dateTime}</h4>
          <hr></hr>
          </div>
        )
      })
    }

    return (
      <div id='list'>
          {theatersOfMovie}
      </div>
      )
    }
  }

export default ResultsWindow;
