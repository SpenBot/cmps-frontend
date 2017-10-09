import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";

class ResultsWindow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      theater: null,
      theaterName: null
    }

    this.setState({theaterName: this.props.theaterResult})

  }



  componentDidMount() {
    // let urlName = theaterName.replace(/\s/, "%20")

    axios.get(`http://localhost:4000/api/theaters/${this.state.theaterName}`).then((res) => {
      this.setState({theater: res.data})
    })
  }






  render() {
      // console.log(`http://localhost:4000/api/theaters/${this.state.theaterName}`)
      // console.log(`http://localhost:4000/api/theaters/${this.props.theaterResult}`)
      console.log(this.state.theaterName)
      return (
        <div>
          <p>{this.props.theaterResult}</p>
          {/* <p>{this.state.theater.address}</p> */}
        </div>
      )
  }
}

export default ResultsWindow;
