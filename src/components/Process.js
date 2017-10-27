import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import checklist from '../images/checklist.png';


export default class Process extends Component {
  render() {

     return (

        <div className="process">

        <p>I included this section to showcase my process for</p>
        <p>planning, organizing, and methodically tackling a project.</p>
        <p>About two weeks into the boot-camp, I realized</p>
        <p>the value of planning a project before starting.</p><br></br>

        <p>I am a front end web developer, recently graduated from a fullstack program</p>
        <p>at The Iron Yard and was introduced to React. I devote my time to creating</p>
        <p>engaging, attractive, and user-friendly sites. I found my way to</p>
        <p> coding through diverse career paths from social work to</p>
        <p>project management. I have a passion for social causes and hope to use</p>
        <p>my skills to benefit and do pro-bono work for certain organizations.</p><br></br>

        <p>When I’m not in front of the terminal, I am reading (my ideal home is a library),</p>
        <p>dancing, volunteering, or enjoying what Austin has to offer. Exploring Austin includes</p>
        <p>finding coffee shops in which to read or code. Come join me for a cup of java! (see what I did there?)</p><br></br>

      <div className="list">
        <img src={checklist} alt="picture of checklist">
        </img>
      </div>

        </div>


     );
   }
 }
