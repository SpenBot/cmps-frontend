import React, {Component} from 'react';
import '../Layout/Layout.css';

class Layout extends Component {

  render() {
      return (
        <div id="layout"  className="Layout">
          <header className="Layout-header">
            <h1>CMPS</h1>
            <h5>movie times for today in D.C.</h5>
            {/* <p className="Layout-intro">
              Welcome to CMPS, Your theater and movie source for Washington, DC!
            </p> */}
            <a href="#">LOGIN</a>
            <a href="#">SIGNUP</a>
          </header>
        </div>
      )
  }
}

export default Layout;
