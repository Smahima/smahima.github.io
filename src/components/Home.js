import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    let button = {
      backgroundColor: "yellow",
      color: "black",
    };

     return (
       <div>
         <p>A home page seems redundant</p>
         <button className="button" style={button}><NavLink to="/Portfolio">Portfolio</NavLink></button>
       </div>
     );
   }
 }


export default Home;
