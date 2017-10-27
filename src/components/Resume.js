import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import resumepdf from '../documents/Subramanian_Mahima_Résumé.pdf';
import resume from '../images/resume.png';


export default  class Resume extends Component {
  render() {

     return (

       <div className="resume">

         <div className="resume-header">
           <h2> Mahima Subramanian</h2>
           <h3> Front End Web Developer</h3>
           <p> mahima.subramanian[at]gmail.com | <a href="https://www.linkedin.com/in/msubramanian/" >LinkedIn</a> | <a href="https://github.com/Smahima">GitHub </a>| <a href="https://medium.com/@mahimaS">Medium </a></p>
         </div>

         <div>
           <h3> SKILLS </h3>
           <p><span>Technical Skills: </span>Bootstrap, CSS, Git, HTML, JavaScript, Node.js, React,Saas UI, Sequelize, SQL </p>
        </div>

       </div>
     );
   }
 }
