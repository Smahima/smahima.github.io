import React, { Component } from 'react';
import LinkedIn from '../images/In-2C-128px-TM.png';
import GitHub from '../images/GitHub-Mark-120px-plus.png';
import Medium from '../images/mediumWhite.png';


export default  class Resume extends Component {
  render() {

     return (

       <div className="resume">

       <div className="resume-link">
         <a href='https://docs.google.com/document/d/19mS5F52qNMoSC2mOD2kfM1IFO_Mglp96laS73uBbALk/edit?usp=sharing'>Link to Résumé</a>
       </div>


        <div className="resume-body">

        <div className="resume-header">
          <h2> Mahima Subramanian</h2>
          <h4> Front End Web Developer</h4>
          <p>
            <a id="emaillink" href="mailto:mahima.subramanian@gmail.com?subject=Ciao Mahima!">This link opens a blank email</a>
            <a> Contact me: mahima.subramanian[at]gmailcom</a>
            <a id="linkedin" href="https://www.linkedin.com/in/msubramanian/"><img src={LinkedIn} alt="LinkedIn Icon" height="50px"/></a>
            <a id="github" href="https://github.com/Smahima"><img src={GitHub} alt="GitHub Icon" height="50px"/></a>
            <a id="medium" href="https://medium.com/@mahimaS"><img src={Medium} alt="Medium" height="50px"/></a>
          </p>
        </div>
        
          <h2> SKILLS</h2>
         <div className="skills">
           <p>Technical Skills:</p>
           <ul>
            <li>CSS</li>
            <li>Git</li>
            <li>HTML</li>
            <li>JavaScript</li>
            <li>Node</li>
            <li>React</li>
            <li>Saas UI</li>
            <li>Sequelize</li>
            <li>SQL</li>
          </ul>

          <p>Leadership & Management:</p>
          <ul>
           <li>Budget Development & Management</li>
           <li>Leading Teams</li>
           <li>Metrics Analysis</li>
           <li>JavaScript</li>
           <li>Project Management </li>
          </ul>
         </div>

         <div className="experience">
           <h2> EXPERIENCE </h2>

           <div>
            <h4>IBM Kenexa Smarter Workforce - Austin,TX</h4>
            <h4>Project Manager (software implementation 2015-2017)</h4>
            <h4>Project Coordinator, Project Management Operations (2013 to 2015)</h4>
            <ul>
              <li>Managed migration of 150 clients on IBM Kenexa Assess on Cloud application to new product platform and completed 40 new client implementations</li>
              <li>Ran weekly Project Status Reports on 300 projects, monitoring key data for active projects, high risk projects, on-time delivery of product</li>
              <li>Developed client communication for 500+ clients</li>
              <li>Trained 25 customers on using new product, IBM Kenexa on Cloud Assess</li>
              <li>Developed metrics, allowing leadership to gauge if team was poised to meet quarterly and annual goals and assess and re-evaluate processes to improve services</li>
              <li>Communicated with clients across all Smarter Workforce products, inquiring about feedback on implementation experience via IBM’s Customer Satisfaction Survey and providing opportunity to address concerns directly with leadership</li>
              <li>Obtained survey results, conducting metrics analysis and reported to leadership on data, and made informed decisions on procedure changes</li>
              <li>Revised and maintained guides, documenting internal PMO processes</li>
            </ul><br></br>

            <h4>Center for Hope and Healing - Lowell,MA</h4>
            <h4>Executive Director (2008 to 2012)</h4>
            <ul>
              <li>Executed agency’s vision and mission through day-to-day operations, directed work of 6 staff members, developed and managed annual budget of approximately $400,000</li>
              <li>Worked with Board of Directors to determine long-term goals to foster progress and uphold agency’s mission to eradicate sexual violence</li>
            </ul>
           </div><br></br>

         <div className="education">
            <h2>EDUCATION</h2>
          <div>
            <h4>Certificate Program Full Stack Web Development</h4>
            <p>Language specialization: React</p>
            <p>The Iron Yard, Austin, TX (2017)</p><br></br>

            <h4>Masters of Science, Organizational Communications and Leadership</h4>
            <p>GPA 3.7</p>
            <p>Northeastern University, Boston, MA(December 2017)</p><br></br>

            <h4>Bachelor of Science,</h4><p>in Psychology and American Sign Language</p>
            <p>Northeastern University, Boston, MA(2004)</p>
          </div>
          </div><br></br>

          <div className="recognitions"></div>
              <h2>RECOGNITIONS</h2>
          <div>
          <ul>
            <li>India New England, Nominated for Woman of the Year Award for Excellence in Human Services Leadership, 2011.</li>
            <li>India New England, Named one of 50 most influential people, recognized for leadership at the Center for Hope and Healing, 2011</li>
          </ul>
          </div>
         </div><br></br>

         <div className="languages"></div>
            <h2>LANGUAGES</h2>
          <div>
           <p>Bilingual Fluent in English and Tamil</p>
          </div>
        </div>

       </div>
     );
   }
 }
