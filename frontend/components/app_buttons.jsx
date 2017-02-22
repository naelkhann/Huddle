import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(logout())
});


class AppButtons extends React.Component {
  constructor(props){
    super(props);
    this.logoutFn = this.logoutFn.bind(this);
  }

  sessionLinks(){
    return(
      <div className="navbar-buttons-container">
        <Link to="/login" className="navbar-button">Log in</Link>
        <Link to="/register" className="navbar-button red-button" id="signup">Sign up</Link>
      </div>
    );
  }

  logoutFn(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.push('/'));
  }

  greetAndLogout(){
    return (
      <div className="navbar-buttons-container">
        <h4 className="session-form-label">{this.props.currentUser.username}</h4>
        <Link to="/user"><img className="navbar-profile-img" src={this.props.currentUser.image_url}/></Link>
        <button id="logout" onClick={this.logoutFn}>Log Out</button>
      </div>
    );
  }

  render() {
    if (this.props.currentUser) {
      return this.greetAndLogout();
    } else {
      return this.sessionLinks();
    }
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AppButtons));
