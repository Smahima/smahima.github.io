import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LinkedIn from '../images/In-2C-128px-TM.png';
import GitHub from '../images/GitHub-Mark-120px-plus.png';


class BaseLayout extends Component {
  render() {

    return (

      <div>

       <div className="header">
        <h1> Mahima Subramanian</h1>
        <h3> Front End Web Developer</h3>

       </div>

      <div className="nav">
       <NavLink activeClassName="selected" className="nav-link" exact to="/About">Meet Me</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Projects">Projects</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Processs">My Approach</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Resume">Résumé</NavLink>
       <NavLink activeClassName="selected" className="nav-link" to="/Contact">Contact Me</NavLink>
      </div>
        {this.props.children}

        <footer>
         <div className="social-media">
           <a href="https://www.linkedin.com/in/msubramanian/"><img src={LinkedIn} alt="LinkedIn Icon" height="50px"/> </a>
           <a href="https://github.com/Smahima"><img src={GitHub} alt="GitHub Icon" height="50px"/> </a>
         </div>
        </footer>

      </div>

      );

    }
  }

export default BaseLayout;
