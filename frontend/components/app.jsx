import React from 'react';
import { Link } from 'react-router';

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

        <div className="navbar-buttons-container">
          <Link to="/login" className="navbar-button">Log in</Link>
          <Link to="/register" className="navbar-button red-button" id="signup">Sign up</Link>
        </div>
      </nav>
    </div>

    <div className="main-container">
      { props.children }
    </div>

  </div>
);

export default App;
