import React, {Component} from 'react';
import axios from 'axios'
import './UserPage.css';

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user ? this.props.user.username : '',
      photo_url: this.props.user ? this.props.user.photo_url : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

  }

    handleChange(e) {
      console.log(e.target);
      console.log(`This is e.target.name = ${e.target.name}`);
      this.setState({
        user: {
          ...this.state.user,
          [e.target.name]:e.target.value
       }
      }, ()=>console.log(this.state))
    }

    handleSubmit(e) {
      e.preventDefault();
      axios.post(`http://localhost:4000/api/users/${this.state.username}`, {
      username: this.state.user.username,
      photo_url: this.state.user.photo_url
      })
    }

    handleDelete(e) {
      e.preventDefault();
      axios.delete(`http://localhost:4000/api/users/${this.state.username}/delete`, {
        username: this.state.username,
        photo_url: this.state.photo_url
      })
      console.log('User Deleted')
    }

  componentWillReceiveProps(newProps) {
    console.log(newProps)
    this.setState({
      username: newProps.user.username,
      photo_url: newProps.user.photo_url
    })
  }

  render() {
    return (
    <div className="userPage">
      <p> {this.state.username} </p>
      <img src={this.state.photo_url} alt='Mug Shot'/>

      <form onSubmit={this.handleSubmit}>
        <p>Profile</p>
          <label>
            Name:
            <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
            <br/>
          <label>
            Image Link:
            <input name="photo_url" type="text" value={this.state.photo_url} onChange={this.handleChange} />
          </label>
            <br/>
            <input type="submit" value="Submit" />
      </form>

      <p>Edit</p>
      <button onClick={this.handleDelete}>
        Delete Profile
      </button>

      <br/>
    </div>
    )
  }
}

export default UserPage;
