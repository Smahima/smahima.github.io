import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import calculator from '../images/calculator.png';
import clearpath from '../images/clearpath.png';



export default class Projects extends Component {

  render() {

     return (
       <div className="portfolio">

       <div className="project">
         <h3> Calculator</h3>
         <img src={calculator} className="portfolio-image"/>
         <p className="project-details">This project tasked us to create a simple calcultor able to handle basic arithmetic.</p>
         <p className="technology"> <span className="bold"> Technology used:</span> CSS, HTML5, JavaScript</p>
         <div className="project-links">
           <a>Live Link </a>
           <a href="https://github.com/Smahima/calculatorAlgorithmsPractice"> Code</a>
         </div>
        </div>

        <div className="project">
          <h3>Play List</h3>
          <p className="project-details">A party playlist to which anyone can add songs as well as comments.</p>
          <p className="technology"> <span className="bold"> Technology used:</span> CSS, HTML5, JavaScript, React</p>
       </div>

        <div className="inProgress">
        <h2>Under Construction</h2>
          <h3> ClearPath</h3>
          <img src={clearpath} className="portfolio-image"/>
          <p className="project-details"> A venue rating site focused on Accessibility.</p>
          <p className="technology"> <span className="bold"> Technology used:</span> CSS, HTML5, JavaScript, React</p>
          <div className="project-links">
            <a>Live Link </a>
            <a href="https://github.com/Smahima/clearPath"> Code</a>
          </div>
         </div>

       </div>
     );
   }
 }
