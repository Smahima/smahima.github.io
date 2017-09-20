import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div>

          <div className="header">
          <ul className="navbar">

            <Link to="/About">About Me</Link>

            <Link to="/Home">Home</Link>


            <Link to="/Portfolio">Portfolio</Link>

          </ul>
          </div>

        {this.props.children}

        <footer>Foot in mouth situations are abundant</footer>
      </div>

      );

    }
  }

export default BaseLayout;
