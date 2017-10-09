import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class TheaterSearch extends Component {




  handleChange(e){
    e.preventDefault()
    let theaterResult = e.target.value
    this.props.changeTheaterResult(theaterResult)
  }






  render() {

    let theaters = this.props.theaters

    const theatersList = theaters.map((theater) => {
      return (
        <option>
          <Link to={`/api/theaters/${theater.name}`}> {theater.name} </Link>
        </option>
       )
         console.log({theatersList})
    })
      return (
        <div>
          <select onChange={this.handleChange.bind(this)}>
            {theatersList}
          </select>

        </div>
      )
  }





}





export default TheaterSearch;
