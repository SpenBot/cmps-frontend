import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

import {Link} from 'react-router-dom'

class Theaters extends Component {
  constructor() {
    super()
    this.state = {
      theaters: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/api/theaters').then((res) => {
      console.log(res)
      this.setState({theaters: res.data})
      console.log(this.state.theaters)
    }).catch((err) => {
      console.log(err)
    })
  }

  render() {
    const theatersList = this.state.theaters.map((theater) => {
      return (
        <Link to={`/api/theaters/${theater.name}`}> {theater.name} </Link>
       )
    })
      return (
        <div>
          {theatersList}
        </div>
      )

  }

  }



export default Theaters;
