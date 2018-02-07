import React from 'react';
import Typist from './Typist';
import '../../css/Welcomemessage.css';

const Welcomemessage = () => (
  <div className="messageWrapper">
    <div className="brand">
      <h1 className="name">Felipe Hernandez</h1>
      <p className="ocupation">web developer</p>
    </div>
    <Typist />
  </div>
);

export default Welcomemessage;
