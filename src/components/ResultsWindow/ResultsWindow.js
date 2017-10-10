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

    // axios.get(`https://cmps-backend.herokuapp.com/api/theaters/${newProps.theaterResult}`)
    //   .then(theater => {
    //     this.setState({theater: theater.data})
    // })
    //
    // axios.get(`https://cmps-backend.herokuapp.com/api/movies/${newProps.movieResult}`)
    //   .then(movie => {
    //     this.setState({movie: movie.data})
    // })

  }





  render() {

      console.log(`Theater State = ${this.state.theater}`)
      console.log(`Movie state = ${this.state.movie}`)

      return (


          <div>

              <br/>
              {this.state.theater && this.state.theater.name}
              <br/>
              {this.state.theater && this.state.theater.address}
              <br/>

              <br/>
              {this.state.movie && this.state.movie.title}
              <br/>
              {this.state.movie && this.state.movie.show_1}
              <br/>
              {this.state.movie && this.state.movie.show_2}
              <br/>
              {this.state.movie && this.state.movie.show_3}
              <br/>

          </div>

      )
  }


}

export default ResultsWindow;
