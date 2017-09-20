import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    let button = {
      backgroundColor: "yellow",
      color: "black",
    };

     return (
       <div>
         <p>A home page seems redundant</p>
         <button className="button" style={button}><Link to="/Portfolio">Portfolio</Link></button>
       </div>
     );
   }
 }


export default Home;
