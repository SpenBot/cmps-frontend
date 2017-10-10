import React, {Component} from 'react'
import axios from 'axios'

class FavoriteTheaters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theater: {
        name: '',
        location: '',
        photo_url:''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e) {
      console.log(e.target);
      this.setState({
        theater:{
          ...this.state.theater,
          [e.target.name]:e.target.value
        }
      })
    }

    handleSubmit(e) {
    e.preventDefault();
    axios.post("/api/users", {
      name: this.state.theater.name,
      location: this.state.theater.location,
      photo_url: this.state.theater.photo_url
    })
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
          <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default FavoriteTheaters;
