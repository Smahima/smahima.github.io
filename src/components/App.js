import React, { Component } from 'react';
import '../styles/index.css';
import BaseLayout from './BaseLayout';
import About from './About';

export default class App extends Component {
  render() {
    return (
      <div className="About">

        <div className="about">
          <h5>{"Howdy! I'm Mahima."}</h5>
        </div>

        <About/>

      </div>
    );
  }
}
