import React, { Component } from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <nav to="/About">About Me</nav>
        <nav to="/Home">Home</nav>
        <nav to="/Portfolio">Portfolio</nav>
      </div>
      );
    }
  }

export default BaseLayout;
