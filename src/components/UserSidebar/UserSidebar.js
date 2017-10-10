import React, {Component} from 'react';
import './UserSidebar.css';


class UserSidebar extends Component {


  render() {
    return (
    <div className="userSidebar">

      <p>Sign Up</p>
        <form>
          <input value="username" />
        </form>


    </div>
    )
  }
}


export default UserSidebar;
