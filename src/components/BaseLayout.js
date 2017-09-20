import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    let navBar = {
     color: "orange",
   };
   let boxStyle = {
     backgroundColor: "purple",
   };
   let footer = {
    color: "white",
   };

    return (
      <div className="box" style={boxStyle}>

          <div className="navBar">
          <p><Link to="/About" style={navBar}>About Me</Link></p>
          <p><Link to="/Home" style={navBar}>Home</Link></p>
          <p><Link to="/Portfolio" style={navBar}>Portfolio</Link></p>
          </div>
        {this.props.children}

        <footer className="footer" style={footer}>Foot in mouth situations are abundant</footer>
      </div>

      );

    }
  }

export default BaseLayout;
