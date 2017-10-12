import React, {Component} from 'react';
import '../Layout/Layout.css';
import Particles from 'particlesjs'

class Layout extends Component {
componentDidMount() {
  window.onload = function() {
    Particles.init({
      selector: '.background', connectParticles: true, sizeVariations: 13, speed: 1,
    });
  };
}
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
