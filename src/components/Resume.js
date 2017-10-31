import React, { Component } from 'react';
import resumepdf from '../documents/Subramanian_Mahima_Résumé.pdf';



export default  class Resume extends Component {
  render() {

     return (

       <div className="resume">

       <div className="resume-download">
         <a id="download" href={resumepdf}>PDF of Resume to Download </a>
       </div>

         <div className="resume-header">
           <h2> Mahima Subramanian</h2>
           <h3> Front End Web Developer</h3>
           <p> mahima.subramanian[at]gmailcom | <a href="https://wwwlinkedincom/in/msubramanian/" >LinkedIn</a> | <a href="https://githubcom/Smahima">GitHub </a>| <a href="https://mediumcom/@mahimaS">Medium </a></p>
         </div>

        <div className="resume-body">

         <div className="skills">
           <h3> SKILLS </h3>
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
           <h3> EXPERIENCE </h3>

           <div>
            <h5>IBM Kenexa Smarter Workforce - Austin,TX</h5>
            <h5>Project Manager (software implementation 2015-2017)</h5>
            <h5>Project Coordinator, Project Management Operations (2013 to 2015)</h5>
            <ul>
              <li>Managed migration of 150 clients on IBM Kenexa Assess on Cloud application to new product platform and completed 40 new client implementations</li>
              <li>Ran weekly Project Status Reports on 300 projects, monitoring key data for active projects, high risk projects, on-time delivery of product</li>
              <li>Developed client communication for 500+ clients</li>
              <li>Trained 25 customers on using new product, IBM Kenexa on Cloud Assess</li>
              <li>Developed metrics, allowing leadership to gauge if team was poised to meet quarterly and annual goals and assess and re-evaluate processes to improve services</li>
              <li>Communicated with clients across all Smarter Workforce products, inquiring about feedback on implementation experience via IBM’s Customer Satisfaction Survey and providing opportunity to address concerns directly with leadership</li>
              <li>Obtained survey results, conducting metrics analysis and reported to leadership on data, and made informed decisions on procedure changes</li>
              <li>Revised and maintained guides, documenting internal PMO processes</li>
            </ul>

            <h5>Center for Hope and Healing - Lowell,MA</h5>
            <h5>Executive Director (2008 to 2012)</h5>
            <ul>
              <li>Executed agency’s vision and mission through day-to-day operations, directed work of 6 staff members, developed and managed annual budget of approximately $400,000</li>
              <li>Worked with Board of Directors to determine long-term goals to foster progress and uphold agency’s mission to eradicate sexual violence</li>
            </ul>
           </div>

         <div className="education">
            <h3>EDUCATION</h3>
            <h5>Certificate Program Full Stack Web Development</h5>
            <p>Language specialization: React</p>
            <p>The Iron Yard, Austin, TX (2017)</p>

            <h5>Masters of Science, Organizational Communications and Leadership</h5>
            <p>GPA 3.7</p>
            <p>Northeastern University, Boston, MA(December 2017)</p>

            <h5>Bachelor of Science,</h5><p>in Psychology and American Sign Language</p>
            <p>Northeastern University, Boston, MA(2004)</p>
          </div>

          <div className="recognitions"></div>
            <p>India New England, Nominated for Woman of the Year Award</p>
            <p> for Excellence in Human Services Leadership, 2011.</p>

            <p>India New England, Named one of 50 most influential people,</p>
            <p>recognized for leadership at the Center for Hope and Healing, 2011</p>
         </div>

         <div className="languages"></div>
           <p>Bilingual Fluent in English and Tamil</p>
        </div>

       </div>
     );
   }
 }
