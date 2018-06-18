import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../img/fh_logo_squared.png';
import NavMobil from './NavMobil';

const Navigation = () => {
  const element = document.getElementsByTagName('span');

  function active() {
    element[0].style.backgroundColor = '#000';
    element[0].style.color = '#fff';
  }

  function unactive() {
    element[0].style.backgroundColor = 'inherit';
    element[0].style.color = '#000';
  }

  return (
    <nav>
      <div className="logo_wrapper">
        <Link to="/">
          <img src={logo} alt="Felipe Hernandez brand logo FH" />
        </Link>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li
          className="dropdown"
          onMouseOver={active}
          onMouseOut={unactive}
          onFocus={() => undefined}
          onBlur={() => undefined}
        >
          <span>Work &nbsp;<i className="fa fa-caret-down" aria-hidden="true" /></span>
          <ul
            className="dropdown-content"
            onMouseOver={active}
            onMouseOut={unactive}
            onFocus={() => undefined}
            onBlur={() => undefined}
          >
            <li><Link to="/Webdevpro"> Web Development</Link></li>
            <li><Link to="/PsAi"> Photoshop / Illustrator</Link></li>
            <li><Link to="videoAnimation"> Video / Animation</Link></li>
          </ul>
        </li>
        <li><Link to="/about">About</Link></li>
        <li>
          <a href="https://github.com/FelipeAtGA" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" aria-hidden="true" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/felipe-hernandez/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>

      </ul>
      <NavMobil />
    </nav>
  );
};

export default Navigation;
