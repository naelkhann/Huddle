import React from 'react';
import {Link, withRouter} from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.props.loggedIn){
      this.props.router.push("/user");
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  update(property){
    return (e) => this.setState({
      [property]: e.currentTarget.value
    });
  }

  linkBackToSignUp(formTypeLabel){
    if (formTypeLabel === "Log in"){
      return (
        <h4 className="session-form-title-subheading">Not registered with us yet? <Link to="/register">Sign up</Link></h4>
      );
    }
  }

  linkBackToLogIn(formTypeLabel){
    if (formTypeLabel === "Sign up"){
      return (
        <h4 className="session-form-title-subheading">Already a member? <Link to="/login">Log In</Link></h4>
      );
    }
  }


  render(){
    const formTypeLabel = this.props.formType === "login" ? "Log in" : "Sign up";
    return (
      <div>

        <div className="session-form-container">
          <div className="session-form-title-container">
            <h2 className="session-form-title">{formTypeLabel}</h2>
            {this.linkBackToSignUp(formTypeLabel)}
          </div>

          <form className="session-form" onSubmit={this.handleSubmit}>
            <label className="session-form-label">Username:<br />
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}/>
            </label>
            <label className="session-form-label">Password:<br />
              <input type="text"
                value={this.state.password}
                onChange={this.update("password")}/>
            </label>
            <input className="session-form-submit" type="submit" value={formTypeLabel} />
            {this.linkBackToLogIn(formTypeLabel)}
          </form>

          <div className="session-form-guest-container">
            <h4 className="session-form-guest-or">OR</h4>
            <button className="session-form-guest-btn">Demo Log in for Guests</button>
          </div>

        </div>

      </div>
    );
  }
}

export default SessionForm;
