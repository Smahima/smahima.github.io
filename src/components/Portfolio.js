import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {

  render() {
    let button = {
      backgroundColor: "yellow",
      color: "black",
    };
     return (
       <div>
         <p>Projects</p>
         <button className="button" style={button}><Link to="/Home">Home</Link></button>
       </div>
     );
   }
 }

export default Portfolio;
