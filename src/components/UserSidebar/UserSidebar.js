import React, {Component} from 'react';
import './UserSidebar.css';
import axios from 'axios';


class UserSidebar extends Component {
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

    handleChange(e) {
      console.log(e.target);
      this.setState({
        user:{
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
    }).then(newUser => console.log("newUser is:", newUser))
  }




  render() {
    return (


    <div className="userSidebar">
      <form onSubmit={this.handleSubmit}>
        <h4>Sign Up!</h4>
        <label>
          Name:
          <input name="username" type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
          <br/>
        <label>
          Image Link:
          <input name="photo_url" type="text" value={this.state.user.photo_url} onChange={this.handleChange} />
        </label>
        <br/>
          <input type="submit" value="Submit" />
      </form>






    </div>

    )
  }
}


export default UserSidebar;
