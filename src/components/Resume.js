import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import resumepdf from '../documents/Subramanian_Mahima_Résumé.pdf';



export default  class Resume extends Component {
  render() {

     return (

       <div className="resume">

         <div className="resume-header">
           <h2> Mahima Subramanian</h2>
           <h3> Front End Web Developer</h3>
           <p> mahima.subramanian[at]gmail.com | <a href="https://www.linkedin.com/in/msubramanian/" >LinkedIn</a> | <a href="https://github.com/Smahima">GitHub </a>| <a href="https://medium.com/@mahimaS">Medium </a></p>
         </div>

        <div className="resume-body">

         <div className="skills">
           <h3> SKILLS </h3>
           <p><span>Technical Skills: </span>CSS, Git, HTML, JavaScript, Node.js, React,Saas UI, Sequelize, SQL </p>
         </div>

         <div className="experience">
           <h3> EXPERIENCE </h3>

           <div>
            <h5>IBM Kenexa Smarter Workforce - Austin,TX</h5>
            <h5>Project Manager (software implementation 2015-2017)</h5>
            <h5>Project Coordinator, Project Management Operations (2013 to 2015)</h5>
            <ul>
              <li>Managed migration of 150 clients on IBM Kenexa Assess on Cloud application to new product platform and completed 40 new client implementations.</li>
              <li>Ran weekly Project Status Reports on 300 projects, monitoring key data for active projects, high risk projects, on-time delivery of product.</li>
              <li>Developed client communication for 500+ clients.</li>
              <li>Trained 25 customers on using new product, IBM Kenexa on Cloud Assess.</li>
              <li>Developed metrics, allowing leadership to gauge if team was poised to meet quarterly and annual goals and assess and re-evaluate processes to improve services.</li>
              <li>Communicated with clients across all Smarter Workforce products, inquiring about feedback on implementation experience via IBM’s Customer Satisfaction Survey and providing opportunity to address concerns directly with leadership.</li>
              <li>Obtained survey results, conducting metrics analysis and reported to leadership on data, and made informed decisions on procedure changes.</li>
              <li>Revised and maintained guides, documenting internal PMO processes.</li>
            </ul>

            <h5>Center for Hope and Healing - Lowell,MA</h5>
            <h5>Executive Director (2008 to 2012)</h5>
            <ul>
              <li>Executed agency’s vision and mission through day-to-day operations, directed work of 6 staff members, developed and managed annual budget of approximately $400,000.</li>
              <li>Worked with Board of Directors to determine long-term goals to foster progress and uphold agency’s mission to eradicate sexual violence.</li>
            </ul>

           </div>


           <p><span></span></p>
           <p><span></span></p>
           <p><span></span></p>












         </div>


        </div>

       </div>
     );
   }
 }
