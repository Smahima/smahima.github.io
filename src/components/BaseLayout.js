import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    let navBar = {
     color: "orange",
   };
   let boxStyle = {
     backgroundColor: "blue",
   };
    return (
      <div>

          <div className="navBar">
          <p><Link to="/About" style={navBar}>About Me</Link></p>
          <p><Link to="/Home" style={navBar}>Home</Link></p>
          <p><Link to="/Portfolio" style={navBar}>Portfolio</Link></p>
          </div>
        {this.props.children}

        <footer>Foot in mouth situations are abundant</footer>
      </div>

      );

    }
  }

export default BaseLayout;
