import React, { Component } from 'react';
import Aboutimage from '../../img/fhR.jpg';
import Resume from '../../img/fh-resume.jpg';
import '../../css/About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">About</h1>
        <div className="aboutWrapper clearfix">
          <div
            className="aboutImgWrapper"
            style={{ backgroundImage: `url(${Aboutimage})` }}
          />
          <div className="aboutTextWrapper">
            <div>
              <h2>Felipe Hernandez - Web Developer</h2>
              <p>I am passionate about problem solving and creativity.
              So, I found programming to be the perfect tool for my
              personality and passion. I have a BA in Emerging Media
              Studies from Hunter College and a Web Developer
              certificate from General
              Assembly. I am in a constant learning and creative mode.
              Please check out my resume in this page for more details.
              Thank you!
              </p>
            </div>
            <div>
              <div className="aboutContactDivs">
                <form>
                  <i className="fa fa-envelope-o" />
                  <input
                    type="text"
                    id="email"
                    className="contactType"
                    defaultValue="flphndz@yahoo.com"
                    readOnly
                  />
                  <button
                    className="contactButton"
                    onClick={() => { this.props.clipboardCopy(); }}
                    onKeyDown={() => { this.props.clipboardCopy(); }}
                    tabIndex="0"
                  >
                     click/copy email to clipboard
                  </button>
                </form>
              </div>
              <div className="aboutContactDivs">
                <p className="contactTypeResume"><i className="fa fa-file-o" />Resume</p>
                <button
                  className="contactButton"
                  onClick={() => { this.props.setModal('resume'); }}
                  onKeyDown={() => { this.props.setModal(); }}
                  tabIndex="0"
                >
                  view resume online
                </button>
                <a
                  className="contactAnchor"
                  href={Resume}
                  download="Felipe Hernandez resume"
                >
                  click to download
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
