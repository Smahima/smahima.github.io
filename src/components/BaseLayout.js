import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LinkedIn from '../images/linkedin.png';
import GitHub from '../images/github.png';
import Medium from '../images/mediumWhite.png';


class BaseLayout extends Component {
  render() {

    return (

      <div className="main">

       <div className="header">

       <div className="name">
          <h1> Mahima Subramanian</h1>
          <h3> Project Manager</h3>
      </div>

        <div className="contact">
          <div className="email">
            <p>mahima.subramanian[at]gmail.com</p>
          </div>

          <div className="social-media">
            <a id="linkedin" href="https://www.linkedin.com/in/msubramanian/"><img src={LinkedIn} alt="LinkedIn Icon" height="50px"/> </a>
            <a id="github" href="https://github.com/Smahima"><img src={GitHub} alt="GitHub Icon" height="50px"/> </a>
            <a id="medium" href="https://medium.com/@mahimaS"><img src={Medium} alt="Medium" height="50px"/> </a>
          </div>
        </div>

       </div>

        <div className="nav">
          <button><NavLink activeClassName="selected" className="nav-link" exact to="/about">Meet Me</NavLink></button>
          <button><NavLink activeClassName="selected" className="nav-link" to="/resume">Résumé</NavLink></button>
        </div>

        {this.props.children}

      </div>

      );

    }
  }

export default BaseLayout;
