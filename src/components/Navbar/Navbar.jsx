// @flow
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavbarHamburgerMenuContext } from './NavbarHamburgerMenu/NavbarHamburgerMenuContext';
import './Navbar.scss';
import logo from 'assets/logo.png';

const Navigation = () => {
  const context = useContext(NavbarHamburgerMenuContext);

  return (
    <nav className="navbar-main">
      <div className="navbar-main-items">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            {/* eslint-disable-next-line */}
            <p role="text">
              Political Computer <br /> Science @ Berkeley
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="NavbarMainLinks">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/resources">Projects</Link>
            </li>
            <li>
              {/* Link to Medium Blog */}
              <a href="https://medium.com/pcs-berkeley">Blog</a>
            </li>
            <li className="join-button">
              <Link to="/join">Join the Club</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <button
          className="navbar-hamburger-menu-button"
          onClick={context.toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="black"
            width="48px"
            height="48px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
