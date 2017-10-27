import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import calculator from '../images/calculator.png';
import clearpath from '../images/clearPath.png';



export default class Projects extends Component {

  render() {

     return (
       <div className="portfolio">

       <div className="project">
         <h3> Calculator </h3>
         <p className="project-info"> A simple calcultor with Johnny 5 as your mascot</p>
         <img src={calculator} className="portfolio-image"/>
         <p className="technology"> <span className="bold"> Technology used:</span> CSS, HTML5, JavaScript</p>
         <div className="project-links">
           <a>Live Link </a>
           <a href="https://github.com/Smahima/calculatorAlgorithmsPractice"> Code</a>
         </div>
        </div>

        <div className="project">
          <h3> Calculator </h3>
          <p className="project-info"> A venue rating site focused on Accessibility</p>
          <img className="portfolio-image"/>
          <p className="technology"> <span className="bold"> Technology used:</span> CSS, HTML5, JavaScript</p>
          <div className="project-links">
            <a>Live Link </a>
            <a href="https://github.com/Smahima/clearPath"> Code</a>
          </div>
         </div>

         <div className="project">
           <h3> Calculator </h3>
           <p className="project-info"> A user directory of robot characters</p>
           <img src={clearpath} className="portfolio-image"/>
           <p className="technology"> <span className="bold"> Technology used:</span> CSS, HTML5, JavaScript</p>
           <div className="project-links">
             <a>Live Link </a>
             <a href="https://github.com/Smahima/clearPath"> Code</a>
           </div>
          </div>

       </div>
     );
   }
 }
