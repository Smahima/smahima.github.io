import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BaseLayout extends Component {
  render() {
    return (
      <div>

          <div className="navbar">
          <p><Link to="/About">About Me</Link></p>
          <p><Link to="/Home">Home</Link></p>
          <p><Link to="/Portfolio">Portfolio</Link></p>
          </div>



        {this.props.children}

        <footer>Foot in mouth situations are abundant</footer>
      </div>

      );

    }
  }

export default BaseLayout;
