import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {

  render() {

     return (
       <div>
         <p>Projects</p>
         <Link to="/">About Me</Link>
       </div>
     );
   }
 }

export default Portfolio;
