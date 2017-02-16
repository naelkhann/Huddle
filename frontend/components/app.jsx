import React from 'react';
import { Link } from 'react-router';
import AppButtons from './app_buttons';

const App = (props) => (
  <div className="app-container">

    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-buttons-container">
          <a className="navbar-button" href="#">Create a Huddle</a>
          <a className="navbar-button" href="#">New App</a>
        </div>
        <div className="navbar-logo-container">
          <img className="navbar-logo" src={window.logo} alt="Huddle" />
        </div>

        <AppButtons />
      </nav>
    </div>

    <div className="main-container">
      { props.children }
    </div>

    <div className="footer-container">
      <div className="footer">
        <p className="footer-title">Made With Love By Nael Khan</p>
        <div className="footer-links">
          <p>About Me</p>
          <p>LinkedIn</p>
          <p>Resume</p>
        </div>
      </div>
    </div>

  </div>
);

export default App;
