import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Mailto from 'react-mailto';


export default class Contact extends Component {
  render() {

     return (
    <div className="web-presence">

       <div className="contact">
        <p>How to get in touch with me:</p>
        <p><Mailto email="mahima.subramanian@gmail.com" obfuscate={true}>Email me! (this link opens a blank email)</Mailto></p>
        <p><a href="https://www.linkedin.com/in/msubramanian/" to="/linkedin">Linkedin</a></p>
        <p><a href="https://github.com/Smahima" to="/github">Github</a></p>
       </div>

       <div className="blog">
        <p>My Medium Blog:</p>
        <p><a href="https://medium.com/@mahimaS" to="/medium">blog</a></p>
       </div>

    </div>
     );
  }
}
