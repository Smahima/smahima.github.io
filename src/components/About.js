
import React, { Component } from 'react';
import picture from '../images/holi.jpg'
import { BreakParagraph } from 'react-break-paragraph'


export default class About extends Component {
  render() {
    return (

        <div className="about">

          <div className="pic">
            <img src={picture} alt="Me at a Holi celebration, covered in colorful powder">
            </img>
          </div>

          <div className="bio">

            <h5>{"Howdy, I'm Mahima!"}</h5>
          <div id="bio-text">
            <p>Moved to Austin from New England (could not take those winters anymore),</p>
            <p>over two years ago and now happy to call ATX home.</p><br></br>

            <p>I am a front end web developer, recently completed a fullstack program at The Iron Yard where I learned React.</p>
            <p>I devote my time to creating engaging, attractive, and user-friendly sites.I have showcased a few</p>
            <p>projects that are complete nd one that is in progress. Similarly, this site itself is constantly </p>
            <p>updated as I learn new functionality and ways in which to style. </p>
            <br></br>

            <p>My personal mission statement is to live life with purpose and intention, in everything I do, personal and professional. I found my way
               to coding through diverse career paths from social work to project management.</p>
            <br></br>

            <p>When I’m not in front of the terminal, I am reading (my ideal home is a library),</p>
            <p>dancing, volunteering, or enjoying what Austin has to offer. Exploring Austin includes</p>
            <p>finding coffee shops in which to read or code. Come join me for a cup of java! (see what I did there?)</p><br></br>
          </div>
        </div>
        </div>

    );
  }
}
