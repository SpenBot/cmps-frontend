import React, {Component} from 'react';
import '../Layout/Layout.css';


class Layout extends Component {


  render() {
      return (
        <div id="layout"  className="Layout">

        <header className="Layout-header">
          <h1 className="Layout-title">CMPS</h1>
          <h5 className="subheading">Cinema Movie Play Schedule</h5>
        </header>

        <nav className="homeNav">
          <a href='/'>Home</a>
          <a href='users'>Profile</a>
        </nav>

        <p className="Layout-intro">
          Welcome to CMPS, Your theater and movie source for Washington, DC!
        </p>

        </div>
      )
  }


}

export default Layout;
