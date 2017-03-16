import React from 'react';
import { Link } from 'react-router';
import AppButtons from './app_buttons';

const App = (props) => (
  <div className="app-container">

    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-buttons-container">
          <Link className="navbar-button" to="/groups/new">Start a Group</Link>
        </div>
        <div className="navbar-logo-container">
          <a href="#"><img className="navbar-logo" src={window.logo} alt="Huddle" /></a>
        </div>

        <AppButtons />
      </nav>
    </div>

    <div className="children-container">
      { props.children }
    </div>

    <div className="footer">
      <ul className="list">
        <li><a href="#">Home</a></li>
        <li><a href="http://www.naelkhan.com">About Me</a></li>
        <li><a href="http://github.com/naelkhann">Github</a></li>
        <li><a href="http://www.linkedin.com/in/naelkhann">LinkedIn</a></li>
      </ul>
    </div>
  </div>
);

export default App;
