
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
            <p><span>Moved to Austin from New England (could not take those winters anymore),</span></p>
            <p><span>over two years ago and now happy to call ATX home.</span></p>

            <p><span>I am a front end web developer, recently completed a fullstack program</span></p>
            <p>at The Iron Yard, specializing in React. I devote my time to creating</p>
            <p>engaging, attractive, and user-friendly sites. I found my way to</p>
            <p>coding through diverse career paths from social work to</p>
            <p>project management. I have showcased a few projects that are complete</p>
            <p>and one that is in progress. Similarly, this site itself is constantly</p>
            <p>updated and edited and I learn new functionality and ways in which to style.</p>

            <p>My personal mission statement is to live life with purpose and intention,</p>
            <p>in everything I do, personal and professional.</p>

            <p>When I’m not in front of the terminal, I am reading (my ideal home is a library),</p>
            <p>dancing, volunteering, or enjoying what Austin has to offer. Exploring Austin includes</p>
            <p>finding coffee shops in which to read or code. Come join me for a cup of java! (see what I did there?)</p><br></br>
          </div>
        </div>

    );
  }
}
