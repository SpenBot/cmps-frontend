import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class Theaters extends Component {
  constructor() {
    super()
    this.state = {
      theaters: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/theaters').then((res) => {
      console.log(res)
      this.setState({theaters: res.data})
      console.log(this.state.theaters)
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default Theaters;
