import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Mailto from 'react-mailto';

class References extends Component {
  render() {

     return (
       <div>
         <p><a href="http://gameofthrones.wikia.com/wiki/Daenerys_Targaryen" to="/gameofthrones">Mother of Dragons</a></p>
         <p><a href="http://pixar.wikia.com/wiki/Dory" to="/dory">Dory</a></p>
         <Mailto email="mahima.subramanian@gmail.com" obfuscate={true}>J.Patera, former manager</Mailto>
       </div>
     );
  }
}


export default References;
