import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {

  render() {
     return (
       <div>
         <p>Projects</p>
         <button><Link to="/Home">Home</Link></button>
       </div>
     );
   }
 }

export default Portfolio;
