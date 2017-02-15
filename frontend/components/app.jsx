import React from 'react';

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
          <a className="navbar-button" href="#">Log in</a>
          <a id="signup" className="navbar-button red-button" href="#">Sign up</a>
        </div>
      </nav>
    </div>
    <h3>Children Live Here</h3>
    { props.children }
  </div>
);

export default App;
