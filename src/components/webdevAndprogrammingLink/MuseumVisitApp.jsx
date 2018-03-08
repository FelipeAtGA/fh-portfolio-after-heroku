import React, { Component } from 'react';
import Museumapp from '../../img/museumVisitPlanner_homepage.png';

class MuseumVisitApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageName: 'museumVisitPlanner',
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
            <img src={Museumapp} alt="Screenshot of the museum homepage app" />
          </div>
          <div className="workDescription">
            <h3>Museum Visit Planner</h3>
            <p>For my capstone project, I built a full CRUD application
            from the ground up. Using the MVC model, I scaffolded with
            node.js, then added back-end with express.js, and
            implemented react.js for the front-end.
            I also used a public API from a famous museum in nyc,
            using Json, Axios, PostgreSQL, node packages (npm), and Unix
            command line. The project was completed in 14 days.
            </p>
            <a className="linkToLiveApp" href="https://dry-plains-91322.herokuapp.com/" target="_black">Live app &nbsp;<i className="fa fa-external-link" aria-hidden="true" /></a>
            <a className="linkToAppInGithub" href="https://github.com/FelipeAtGA/CH-Plan-A-Visit" target="_black">App on &nbsp;<i className="fa fa-github AppBttn" aria-hidden="true" /></a>
          </div>
          <div className="workTech">
            <h3>Technologies used:</h3>
            <ul className="tiles">
              <li className="listTech">HTML + CSS</li>
              <li className="listTech">RESTfull</li>
              <li className="listTech">MVC model</li>
              <li className="listTech">Node.js</li>
              <li className="listTech">Express.js</li>
              <li className="listTech">React.js</li>
              <li className="listTech">Axios</li>
              <li className="listTech">PostgreSQL</li>
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

export default MuseumVisitApp;
