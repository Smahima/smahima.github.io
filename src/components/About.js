
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

            <p>I am a project manager with experience in software implementation, focused on delivering customized solutions for our clients.</p>
            <br></br>

          </div>
        </div>
        </div>

    );
  }
}
