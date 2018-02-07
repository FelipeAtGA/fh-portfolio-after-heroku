import React from 'react';
import Homeimage from './Homeimage';
import Welcommessage from './WelcomeMessage';
import '../../css/App.css';

const Home = () => (
  <div className="App">
    <Welcommessage />
    <Homeimage />
  </div>
);

export default Home;
