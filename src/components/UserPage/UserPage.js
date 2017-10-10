import React, {Component} from 'react';
import {
  Link,
  Route
} from 'react-router-dom'
import './UserPage.css';

class UserPage extends Component {


  render() {
    return (
    <div className="userPage">

      <h2>This is the User Page</h2>

      <p>User Name</p>
      <p>Photo</p>
      <p>Edit</p>
      <p>Delete</p>
      <br/>

      <p>Favorite Theaters</p>
      <p>Edit</p>
      <p>Delete</p>
      <br/>

      <p>Movies Wishlist</p>
      <p>Edit</p>
      <p>Delete</p>
      <br/>

    </div>
    )
  }
}


export default UserPage;
