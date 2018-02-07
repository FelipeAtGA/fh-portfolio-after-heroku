import React, { Component } from 'react';
import ThemeetingPoster from '../../img/theMeetingVideoPoster.png';
import Purpleboxposter from '../../img/purpleBoxPoster.png';
import Characterstudy from '../../img/characterStudy.png';
import Psaposter from '../../img/psa.png';
import Definespace from '../../img/definingSpaceVideoPoster.png';
import Processingsketch from '../../img/processingSketch.png';
import '../../css/VideoMation.css';

class VideoMation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoProps: ['themeeting', 'purplebox', 'characterstudy', 'psa', 'definespace', 'processingsketch'],
      imagePosters: [ThemeetingPoster, Purpleboxposter, Characterstudy, Psaposter, Definespace, Processingsketch],
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">Digital Video and Animation</h1>
        <div className="videoWrapper clearfix">
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[0]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[0], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Stop motion animation:</h4>
            <h2>The Meeting</h2>
            <div className="contentDescription">
              <p>This was my first animation project. The idea was to understand
              animation mechanics, concepts, and technicalities. I built the scene
              with random objects that I found around my house, then set it up and
              started taking pictures of the characters’ different positions. I
              used a Creative Commons song. The story is simple, two friends that
              meet at a place to go have some coffee.
              </p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[1]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[1], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Digital video production:</h4>
            <h2>The Purple Box</h2>
            <div className="contentDescription">
              <p>Purple Box was a collaborative work. The title of the video and
              inspiration came from a poem written by John Michael Wagner, who is
              the narrator and collaborator in the production of this video. The
              goal of the video is to match words/phrases with images to create a
              narrative that portraits the poem. Hunter Stone and myself shot,
              edited, and created the video. This video was featured during the
              Netherlands Meets New York Screening at Hunter College, and at a
              showcase for incoming students at Hunter College as well.
              </p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[2]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[2], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Character study animation:</h4>
            <h2>The Little Prince</h2>
            <div className="contentDescription">
              <p>This project was made using Adobe After Effects and Illustrator.
              The goal was to study a character’s movements and animate them. I
              used the story of The Little Prince by Antoine de Saint-Exupéry
              for inspiration. While it is not the literal portrayal of the story,
                I included text excerpts from the book, with some adaptations of
              my own, to create a small story. I also use my computers screen
              reader to obtain a voice-over narrator. Then, I used a toy application
              that modifies recordings to make it sound more robotic. I also
              used music from Songafy, another toy application from the Apple
              store. The project is a work in progress still, and I expect to
              develop it further in the near future.
              </p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[3]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[3], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Typography animation:</h4>
            <h2>Public Service Ann.</h2>
            <div className="contentDescription">
              <p>This project was made using Adobe After Effects and videos
              shot with my cellphone. The goal was to manipulate and animate
              typography while creating a public service announcement. My
              subject was environmental protection. I got inspiration for
              my subject from walking my dog everyday for 45 min, and my
              concern for the problems that litter and plastic bags represent
              for the environment and wild life. So, I narrowed my subject
              to just plastic bags, and shot these plastic bags with my
              cellphone while walking my dog. I also used music licensed
              under Creative Commons. Credits are at the end of the video.
              </p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[4]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[4], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Defining space:</h4>
            <h2>Defining Space</h2>
            <div className="contentDescription">
              <p>This was my first video ever made. So, the image is very
              unsteady and the lightning is not as good. Even though the
              quality of the video isn’t as professional as it should be,
              I included it here because it speaks a lot about my ingenuity
              and creative style. The subject was the space, and the goal
              was to find and define space as alive entity. I walked through
              my college campus and shot anything that I thought met the
              criteria for the project. So, my personal goal was to bring
              the space out of the background and convert it into a character
              that narrates a story. I edit the movie in Final Cut on a Macintosh.
              The music is by Bjork.
              </p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[5]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[5], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Processing.js sketch:</h4>
            <h2>Untitled</h2>
            <div className="contentDescription">
              <p>I made this video using Processing.js. There is not story
              or subject about it. The only goal for this project was to
              explore the technology and create a program that reflected
              the skills and concepts studies during our Game Programming
              class. After we worked on Processing.js, we moved onto programming
              with Unity for our final game programming project.
              </p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoMation;
