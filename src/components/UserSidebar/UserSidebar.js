import React, {Component} from 'react';
import './UserSidebar.css';


class UserSidebar extends Component {


  render() {
    return (
    <div className="userSidebar">

      <h3>This is the User Sidebar</h3>

      <p className="bold">If Logged-Out</p>
      <p>Log-In and Sign-Up</p>
      <br/>

      <p className="bold">If Logged-In</p>
      <p>username, Log-Out</p>
      <p>maybe recently favorited, or just number of favorite theaters or movies</p>

    </div>
    )
  }
}


export default UserSidebar;
