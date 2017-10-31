import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LinkedIn from '../images/In-2C-128px-TM.png';
import GitHub from '../images/GitHub-Mark-120px-plus.png';
import Medium from '../images/Monogram.png';
import picture from '../images/holi.jpg'
import calculator from '../images/calculator.png';


class BaseLayout extends Component {
  render() {

    return (

      <div>

       <div className="header">
          <h1> Mahima Subramanian</h1>
          <h3> Front End Web Developer</h3>



        <div className="nav">

        <a className="resume-nav" href="/Resume">
          <img src={picture} alt="Me at a Holi celebration, covered in colorful powder">
          </img>
        </a>

        <a className="about" href="/About">
          <img src={picture} alt="Me at a Holi celebration, covered in colorful powder">
          </img>
        </a>

        <a className="projects-nav" href="/Projectst">
          <img src={calculator} alt="image of calculator project">
          </img>
        </a>

        </div>

       </div>


        {this.props.children}

        <footer className="contact">

        <div className="email">
          <p>How to get in touch with me: mahima.subramanian[at]gmail.com</p>
          <p><a id="emaillink" href="mailto:mahima.subramanian@gmail.com?subject=Ciao Mahima!">This link opens a blank email</a></p>
        </div>

         <div className="social-media">
           <a id="linkedin" href="https://www.linkedin.com/in/msubramanian/"><img src={LinkedIn} alt="LinkedIn Icon" height="50px"/> </a>
           <a id="github" href="https://github.com/Smahima"><img src={GitHub} alt="GitHub Icon" height="50px"/> </a>
           <a id="medium" href="https://medium.com/@mahimaS"><img src={Medium} alt="Medium" height="50px"/> </a>
         </div>
        </footer>

      </div>

      );

    }
  }

export default BaseLayout;
