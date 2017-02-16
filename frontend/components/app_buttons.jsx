import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});

const sessionLinks = () => (
  <div className="navbar-buttons-container">
    <Link to="/login" className="navbar-button">Log in</Link>
    <Link to="/register" className="navbar-button red-button" id="signup">Sign up</Link>
  </div>
);

const greetAndLogout = (currentUser, logoutFn) => (
  <div className="navbar-buttons-container">
    <h4 className="session-form-label">{currentUser.username}</h4>
    <button className="navbar-button red-button" onClick={logoutFn}>Log Out</button>
  </div>
);

const AppButtons = (props) => (
  props.currentUser ? greetAndLogout(props.currentUser, props.logout) : sessionLinks()
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppButtons);
