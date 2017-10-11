import React, {Component} from 'react';
import axios from 'axios'
import {
  Link,
  Route
} from 'react-router-dom'
import './UserPage.css';
import UserSidebar from '../UserSidebar/UserSidebar.js'

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        photo_url: ''
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    const {username} = this.state.user // const username = this.state.user.username

    if (username) {
      axios.get(`http://localhost:4000/api/users/${username}`).then((res) => {
        console.log("userpage", res.data);
        this.setState({user: res.data})
      }).catch((err) => {
        console.log(err)
      })
    }
  }

    handleChange(e) {
      console.log(e.target);
      this.setState({
        user: {
          ...this.state.user,
          [e.target.name]:e.target.value
       }
    }, ()=>console.log(this.state))
  }

    handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:4000/api/users", {
      username: this.state.user.username,
      photo_url: this.state.user.photo_url
    })
  }


  render() {
    console.log(this.state);

    // console.log(`Movie Id = ${this.props.username}`)
    // console.log(`Movie state = ${this.state.username}`
    return (

    <div className="userPage">
      <h2>This is the User Page</h2>

      <p>{this.props.user.username}</p>
      <img src={this.props.user.photo_url} alt='Mug Shot'/>

      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="username" type="text" value={this.state.user.username} onChange={this.handleChange} />
        </label>
          <br/>
        <label>
          Image Link:
          <input name="photo_url" type="text" value={this.state.user.photo_url} onChange={this.handleChange} />
        </label>
        <br/>
          <input type="submit" value="Submit" />
      </form>


      <p>Edit</p>
      <p>Delete</p>

      <br/>
    </div>
    )
  }
}


export default UserPage;
