import React, { Component } from 'react';
import unitCollectorGame    from '../img/unitCollectorGame.jpg';
import Museumapp            from '../img/museumVisitPlanner_homepage.png';
import MywebsiteImage       from '../img/portfolioHomepageImg.png';
import Iartposter from '../img/posterD3-2.jpg';
import Spaceroom from '../img/Spaceroom.jpg';
import Portrait from '../img/selfPortrait.gif';
import Kiki from '../img/kiki.jpg';
import Themeeting from '../video/theMeeting.mp4';
import Purplebox from '../video/purpleBoxHD.mp4';
import Characterstudy from '../video/character_study.mp4';
import Psa from '../video/psa.mp4';
import Definingspace from '../video/definingSpace.mp4';
import Processingsketch from '../video/sketchIntoVideo4.mp4';
import Resume from '../img/resume122117-v2b-img.jpg';
import '../css/Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let imageToRender = null;
    let renderVideo = this.props.condi;
    let videoToRender = null;
    if (this.props.imageUri === 'unitCollectorImage') {
      imageToRender = unitCollectorGame;
    } else if (this.props.imageUri === 'museumVisitPlanner') {
      imageToRender = Museumapp;
    } else if (this.props.imageUri === 'mywebsiteFrontPageImg') {
      imageToRender = MywebsiteImage;
    } else if (this.props.imageUri === 'iarposter') {
      imageToRender = Iartposter;
    } else if (this.props.imageUri === 'spaceroom') {
      imageToRender = Spaceroom;
    } else if (this.props.imageUri === 'portrait') {
      imageToRender = Portrait;
    } else if (this.props.imageUri === 'illustration') {
      imageToRender = Kiki;
    } else if (this.props.imageUri === 'themeeting') {
      videoToRender = Themeeting;
    } else if (this.props.imageUri === 'purplebox') {
      videoToRender = Purplebox;
    } else if (this.props.imageUri === 'characterstudy') {
      videoToRender = Characterstudy;
    } else if (this.props.imageUri === 'psa') {
      videoToRender = Psa;
    } else if (this.props.imageUri === 'definespace') {
      videoToRender = Definingspace;
    } else if (this.props.imageUri === 'processingsketch') {
      videoToRender = Processingsketch;
    } else if (this.props.imageUri === 'resume') {
      imageToRender = Resume;
    }
    return (
      <div>
        <div
          className="modalOverlay"
          onClick={() => { this.props.setModal(); }}
          onKeyDown={() => { this.props.setModal(); }}
          role="button"
          tabIndex="0"
        >
          <div className="modalContent">
            <img
              src={imageToRender}
              alt="Screenshot of the museum homepage app"
              style={{display: renderVideo ? 'none' : 'block' }}
            />
            <video
              controls
              src={videoToRender}
              style={{display: renderVideo ? 'block' : 'none' }}
            >Sorry, your browser doesn't support embeded videos</video>
            <div>
              <br />
              <p>( click anywhere to close this window )</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
