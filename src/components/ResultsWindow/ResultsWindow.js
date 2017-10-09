import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class ResultsWindow extends Component {
  render() {
      console.log(this.props.theaterResult)
      return (
        <div>
          <p>{this.props.theaterResult}</p>
        </div>
      )
  }
}

export default ResultsWindow;
