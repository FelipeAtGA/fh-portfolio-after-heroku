import React, { Component } from 'react';
import MywebsiteImage from '../../img/portfolioHomepageImg.png';

class Mywebsite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageName: 'mywebsiteFrontPageImg',
    };
  }


  render() {
    return (
      <div>
        <div className="webdevproGridWrapper clearfix cards">
          <div
            className="imageWrapper"
            onClick={() => { this.props.setModal(this.state.imageName); }}
            onKeyDown={() => { this.props.setModal(); }}
            role="button"
            tabIndex="0"
          >
            <img src={MywebsiteImage} alt="Screenshot of my portfolio homepage app" />
          </div>
          <div className="workDescription">
            <h3>FH Portfolio website</h3>
            <p>I created FH portfolio after finishing the Web Development
              Immersive Fellow (WDI) at General Assembly - New York City
              Tech Talent Pipeline. The goal was to revamp an old website
              I made during my college education at Hunter CUNY and to
              showcase the work that I’ve done in web development and
              emerging media. I chose React.js as the platform because
              of my passion for JavaScript and my love for the entertainment
              business and emerging media.
            </p>
            <a className="linkToLiveApp" href="http://localhost:3000/" target="_black">Live app &nbsp;<i className="fa fa-external-link" aria-hidden="true" /></a>
            <a className="linkToAppInGithub" href="https://github.com/FelipeAtGA/fh-portfolio" target="_black">App on &nbsp;<i className="fa fa-github AppBttn" aria-hidden="true" /></a>
          </div>
          <div className="workTech">
            <h3>Technologies used:</h3>
            <ul className="tiles">
              <li className="listTech">HTML + CSS</li>
              <li className="listTech">JavaScript</li>
              <li className="listTech">Node.js</li>
              <li className="listTech">React.js</li>
              <li className="listTech">Bootstrap</li>
              <li className="Nextsteps"><h4>Next Steps:</h4></li>
              <ul>
                <li>Make this app responsive to different viewports/devices</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Mywebsite;
