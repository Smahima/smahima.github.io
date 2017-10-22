import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Mailto from 'react-mailto';


export default class Contact extends Component {
  render() {

     return (
       <div>
         <p>How to get in touch with me:</p>
         <p><a href="https://www.linkedin.com/in/msubramanian/" to="/linkedin">Linkedin</a></p>
         <p><a href="https://github.com/Smahima" to="/github">Github</a></p>
         <Mailto email="mahima.subramanian@gmail.com" obfuscate={true}>Email me!</Mailto>
       </div>
     );
  }
}
