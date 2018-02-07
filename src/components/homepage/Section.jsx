import React from 'react';
import '../../css/App.css';
import logo from '../../img/tvLogoLinesv2.png';


const Section = () => (
  <div className="wrapper-branding">
    <div className="branding">
      <div className="name">
        <p className="brand">FELIPE HERNANDEZ</p>
        <p className="tagLine">web &nbsp;developer</p>
      </div>
      <div id="logo">
        <img className="img-responsive" src={logo} alt="Felipe Hernandez logo" />
      </div>
    </div>
  </div>
);

export default Section;
