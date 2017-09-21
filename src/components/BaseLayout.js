import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    let navBar = {
     color: "orange",
   };
   let boxStyle = {
     backgroundColor: "white",
   };
   let footer = {
    color: "white",
   };

    return (
      <div className="box" style={boxStyle}>

          <div className="navBar">
          <p><NavLink to="/App" style={navBar}>Splash Page</NavLink></p>
          <p><NavLink to="/About" style={navBar}>About Me</NavLink></p>
          <p><NavLink to="/Home" style={navBar}>Home</NavLink></p>
          <p><NavLink to="/Portfolio" style={navBar}>Portfolio</NavLink></p>
          <p><NavLink to="/Contacts" style={navBar}>Contact Me</NavLink></p>
          <p><NavLink to="/References" style={navBar}>References</NavLink></p>
          </div>
        {this.props.children}

        <footer className="footer" style={footer}>Foot in mouth situations are abundant</footer>
      </div>

      );

    }
  }

export default BaseLayout;
