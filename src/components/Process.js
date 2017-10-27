import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import checklist from '../images/checklist.png';
import progress from '../images/projectprogress.png';
import schedule from '../images/dailyschedule.png';

export default class Process extends Component {
  render() {

     return (

        <div className="process">

          <p>I included this section to showcase my process for</p>
          <p>planning, organizing, and methodically tackling a project.</p>
          <p>About two weeks into the boot-camp, I realized</p>
          <p>the value of planning a project before starting.</p><br></br>

          <p>First, I start with a checklist. It asks basic questions about the process</p>
          <p>o I can brainstorm ideas. I use this to then informs</p>
          <p>the wireframe(s) and component diagrams for a project.</p><br></br>

          <div className="list">
            <img src={checklist} alt="picture of checklist">
            </img>
          </div>

          <p>Next I create a spreadsheet organized by day of the week, </p>
          <p>with tabs I can brainstorm ideas. for specific weeks showcasing</p>
          <p>tprogress in consecutive weeks. This helps me stay on task</p>
          <p>and know how to prioritize.  These notes also go into my README.</p><br></br>

          <div className="list">
            <img src={progress} alt="pic of spreadsheet to track project progress">
            </img>
          </div>

          <p>Finally, I use I use a daily schedule spreadsheet to organize my tasks. </p>
          <p>This goes from 9 am to 5 pm and is chunked into 30 minute blocks</p>
          <p>into which I assign tasks. The tricky part is sticking</p>
          <p>to the schedule if something comes up that takes longer.</p><br></br>

          <div className="list">
            <img src={schedule} alt="pic of daily schedule spreadsheet">
            </img>
          </div>

        </div>


     );
   }
 }
