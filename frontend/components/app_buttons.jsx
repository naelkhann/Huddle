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

const AppButtons = (props) => (
    <div className="navbar-buttons-container">
      <button className="navbar-button red-button" onClick={props.logout}>Log Out</button>
      <Link to="/login" className="navbar-button">Log in</Link>
      <Link to="/register" className="navbar-button red-button" id="signup">Sign up</Link>
    </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppButtons);
