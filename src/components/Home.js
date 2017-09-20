import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
     return (
       <div>
         <p>A home page seems redundant</p>
         <button><Link to="/Portfolio">Portfolio</Link></button>
       </div>
     );
   }
 }


export default Home;
