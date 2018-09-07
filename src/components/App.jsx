import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Header from './Header';
import Modal from './Modal';
import Webdevpro from './webdevAndprogrammingLink/Webdevpro';
import PsAi from './photoshopIllustratorLink/PsAi';
import VideoMation from './videoAnimation/VideoMation';
import About from './about/About';
import Home from './homepage/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      img4modal: '',
      renderVideo: false,
      activeNavMobil: true,
    };
    this.setModal = this.setModal.bind(this);
    this.onOrOffNavMobil = this.onOrOffNavMobil.bind(this);
    this.clipboardCopy = this.clipboardCopy.bind(this);
  }

  onOrOffNavMobil() {
    const initialState = this.state.activeNavMobil;
    this.setState({
      activeNavMobil: !initialState,
    });
    const menu = document.getElementsByClassName('display_ul');
    if (this.state.activeNavMobil) {
      menu[0].style.display = 'block';
    } else {
      menu[0].style.display = 'none';
    }
  }

  setModal(image, conditional) {
    this.setState({
      renderVideo: conditional,
    });
    const imageName = image;
    const modal = document.getElementsByClassName('modalOverlay');
    if (this.state.modal === false) {
      modal[0].style.display = 'block';
      this.setState({
        modal: true,
        img4modal: imageName,
      });
    } else {
      modal[0].style.display = 'none';
      this.setState({
        modal: false,
        renderVideo: false,
      });
    }
  }

  clipboardCopy() {
    document.querySelector('#email').select();
    document.execCommand('copy');
  }

  render() {
    return (
      <div className="wrapper">
        <Modal
          imageUri={this.state.img4modal}
          condi={this.state.renderVideo}
          setModal={this.setModal}
        />
        <Header
          onOrOffNavMobil={this.onOrOffNavMobil}
        />
        <main>
          <Switch>
            <Route
              exact
              path="/Webdevpro"
              render={() => <Webdevpro setModal={this.setModal} />
              }
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/PsAi"
              render={() => <PsAi setModal={this.setModal} />
              }
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/videoAnimation"
              render={() => <VideoMation setModal={this.setModal} />
              }
            />
          </Switch>
          <Switch>
            <Route
              exact
              path="/about"
              render={() => (
                <About
                  clipboardCopy={this.clipboardCopy}
                  setModal={this.setModal}
                />
                )
              }
            />
          </Switch>
          <Route exact path="/" component={Home} />
        </main>
      </div>
    );
  }
}

export default App;
