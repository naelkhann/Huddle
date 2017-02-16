import React from 'react';
import { Link } from 'react-router';
import AppButtons from './app_buttons';

const App = (props) => (
  <div>

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

  </div>
);

export default App;
