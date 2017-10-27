import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import resumepdf from '../documents/Subramanian_Mahima_Résumé.pdf'


export default  class Resume extends Component {
  render() {

     return (
       <div className="resume">

       <div className="download-pdf" >
        <a id="pdf" href={resumepdf}>{"Mahima's Resume for Download "}</a>
      </div>

      


       </div>
     );
   }
 }
