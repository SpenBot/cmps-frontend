import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";

class ResultsWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theater: null
    }
  }

  componentWillReceiveProps (newProps) {
    axios.get(`http://localhost:4000/api/theaters/${newProps.theaterResult}`)
      .then(theater => {
        this.setState({theater: theater.data})
    })
  }

  render() {
      return (
        <div>
            {this.state.theater && this.state.theater.name}
            <br/>
            {this.state.theater && this.state.theater.address}
            <br/>
        </div>
      )
  }
  

}

export default ResultsWindow;
