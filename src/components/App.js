import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout'

export default class App extends Component {
  render() {
    return (
      <div className="About">

        <div className="about">

          <h5>{"Howdy! I'm Mahima."}</h5>
          <p>Moved to Austin from New England (could not take those winters anymore)</p>
          <p>over two yeas ago and happy to call ATX home now.</p><br></br>

          <p>I am a front end web developer, recently graduated from a fullstack program</p>
          <p>at The Iron Yard and was introduced to React. My time is devoted to creating</p>
          <p>pleasing to the eye sites and focusing on best practices for UI.</p><br></br>

          <h5>Background:</h5>
          <p>Found my way to coding through diverse career paths from social work to</p>
          <p>project management. I have a passion for social causes and hope to use</p>
          <p>my skills to benefit and do pro-bono work for certain organizations.</p><br></br>

          <h5>Me:</h5>
          <p>When I’m not in front of the terminal, I am reading (my ideal home is a library),</p>
          <p>dancing, volunteering, or enjoying what Austin has to offer. Exploring Austin includes</p>
          <p>finding coffee shops in which to read or code. Come join me for a cup of java! (see what I did there?)</p>

        </div>

      </div>
    );
  }
}
