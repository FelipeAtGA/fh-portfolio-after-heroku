import React, { Component } from 'react';
import Iartposter from '../../img/posterD3-2.jpg';
import Spaceroom from '../../img/Spaceroom.jpg';
import Portrait from '../../img/selfPortrait.gif';
import Kiki from '../../img/kiki.jpg';
import '../../css/PsAi.css';

class PsAi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Iartposter, Spaceroom, Portrait, Kiki],
      imgpropsnames: ['iarposter', 'spaceroom', 'portrait', 'illustration'],
      titles: ['iARTmix poster', 'Defining space', 'Self portrait', 'Kiki'],
      classes: 'projectWrapper',
      text: [
        `I used photographs from my own repertory and Photoshop CC to build the
        design of the poster. The committee of the iARTmix exhibition commissioned
        me with the task of creating a poster for the event. I developed three
        different drafts with different designs and images, and the above poster
        was the one selected. The iARTmix is an exhibition featuring students’ works
        from courses at the crossroad of technology, music, and art.`,
        `The goal of this project was to create an image that uses the tools and
        editing capabilities of Photoshop and make a re-interpretation of the actual
        space. So, for this project I manipulated a photography I took of a living
        room. I included two external images to re—invent the space, one image of
        my own stock and the other one from a free-licensing image stock site. I
        aimed to give the image a totally new meaning that represents my creative
        vision.`,
        `For this project, my two subjects were a self-portrait and the use of
        light as an element for composition. Additionally, I wanted to create
        an image that uses the tools and editing capabilities of Photoshop while
        also using the software layering functionality. So, I took pictures of
        different elements that projected lights. Then, I edited them and selected
        the ones I liked the most. And finally, I assembled all the different assets
        in this composition.`,
        `For my illustrator project, the goal was to create an image using all
        the Illustrator tools and tricks that I knew possible at the time. So, I
        used a photograph that I took during a vacation in Miami for its colorful
        appearance and intricate design, placed it as a background, then traced
        the image over a semi-transparent layer object. The final result was this
        comic-kind-of-looking image that represents a real space and
        event.`,
      ],
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">Photoshop and Illustrator</h1>
        <div className="PsAiwrapper clearfix">
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[0]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[0]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Photoshop and Illustrator</h4>
            <h2>{this.state.titles[0]}</h2>
            <div className="contentDescription">
              <p>{this.state.text[0]}</p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[1]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[1]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Photoshop</h4>
            <h2>{this.state.titles[1]}</h2>
            <div className="contentDescription">
              <p>{this.state.text[1]}</p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[2]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[2]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Photoshop</h4>
            <h2>{this.state.titles[2]}</h2>
            <div className="contentDescription">
              <p>{this.state.text[2]}</p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[3]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[3]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h4>Illustrator</h4>
            <h2>{this.state.titles[3]}</h2>
            <div className="contentDescription">
              <p>{this.state.text[3]}</p>
            </div>
            <p className="downArrow">&#8675;</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PsAi;
