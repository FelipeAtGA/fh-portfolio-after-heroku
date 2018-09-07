import React, { Component } from 'react';
import Navigation from './Navigation';
import '../css/App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header>
        <Navigation
          onOrOffNavMobil={this.props.onOrOffNavMobil}
        />
      </header>
    );
  }
}

export default Header;
