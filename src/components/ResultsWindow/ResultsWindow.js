import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from "axios";

class ResultsWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      movie: null
    }

  componentWillReceiveProps (props) {
    axios.get(`http://localhost:4000/api/theaters/${props.theaterResult}`)
      .then(theater => {
        console.log(theater)
    })
  }

  componentDidMount () {

  }


  render() {
      console.log(`Props = ${this.props}`)
      return (
        <div>
          <p>{this.props.name}</p>
          <p>{this.props.address}</p>
        </div>
      )
  }
}


export default ResultsWindow;
