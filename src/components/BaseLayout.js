import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class BaseLayout extends Component {
  render() {
    let navBar = {
     color: "orange"

   };
   let boxStyle = {
     backgroundColor: "purple",
   };
   let footer = {
    color: "white",
   };

   <NavLink
  activeStyle={{
    color: "blue",
    backgroundColor: "white"
  }}>Splash Page</NavLink>


    return (
      <div className="box" style={boxStyle}>

          <div className="navBar">
          <NavLink activeClassName="selected" className="nav-link" exact to="/">Splash Page</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/About" style={navBar}>About Me</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Home" style={navBar}>Home</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Portfolio" style={navBar}>Portfolio</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/Contacts" style={navBar}>Contact Me</NavLink>
          <NavLink activeClassName="selected" className="nav-link" to="/References" style={navBar}>References</NavLink>
          </div>
        {this.props.children}

        <footer className="footer" style={footer}>Foot in mouth situations are abundant</footer>
      </div>

      );

    }
  }

export default BaseLayout;
