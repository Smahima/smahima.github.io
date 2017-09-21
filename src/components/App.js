import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    let button = {
      backgroundColor: "yellow",
      color: "black",
    };

     return (
       <div>
         <p>Jump on in!</p>
         <img href="https://imgur.com/gallery/GESr9Ui">Baby Elephants!</img>
         <button className="button" style={button}><NavLink to="/Portfolio">Portfolio</NavLink></button>
       </div>
     );
   }
 }


export default App;
