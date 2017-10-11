import React, {Component} from 'react';
import './UserSidebar.css';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Redirect, Switch} from 'react-router-dom'
import UserPage from '../UserPage/UserPage.js'


class UserSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: '',
        photo_url: ''
      },
      newUser: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
  }).then(() => {
  axios.get(`http://localhost:4000/api/users/${this.state.user.username}`)
    .then((res) => {
      this.setState({newUser: res.data})
      console.log(this.state.newUser.username)
    })
  this.props.history.push('/users')})
  // .then(newUser => <Redirect to="/users" />)

}



  render() {
    return (
    <div className="userSidebar">
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

      <p>{this.state.newUser && this.state.newUser.username}</p>
    </div>

    )
  }
}


export default UserSidebar;
