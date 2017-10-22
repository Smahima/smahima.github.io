import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class BaseLayout extends Component {
  render() {

    return (

      <div>

       <div className="header">
        <h1> Mahima Subramanian</h1>
       </div>

      <div className="nav">
       <NavLink activeClassName="selected" className="nav-link" exact to="/">About Me</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Portfolio">Portfolio</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Processs">My Approach</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Resume">Resume</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Contact">Contact Me</NavLink>
      </div>
        {this.props.children}

        <div><footer className="footer">How to reach me: mahima.subramanian@gmail.com</footer></div>

      </div>

      );

    }
  }

export default BaseLayout;
