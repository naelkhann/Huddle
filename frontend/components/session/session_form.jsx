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
    if (formTypeLabel === "Log In"){
      return (
        <h4>Not registered with us yet? <Link to="/register">Sign up</Link></h4>
      );
    }
  }

  linkBackToLogIn(formTypeLabel){
    if (formTypeLabel === "Sign Up"){
      return (
        <h4>Already a member? <Link to="/login">Log In</Link></h4>
      );
    }
  }

  render(){
    const formTypeLabel = this.props.formType === "login" ? "Log In" : "Sign Up";
    return (
      <div>
        <div className="session-form-container">
          <h2>{formTypeLabel}</h2>
          {this.linkBackToSignUp(formTypeLabel)}
          <form className="session-form" onSubmit={this.handleSubmit}>
            <label>Username<br />
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}/>
            </label>
            <label>Password<br />
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}/>
            </label>
            <input type="submit" value={formTypeLabel} />
          </form>
          {this.linkBackToLogIn(formTypeLabel)}
        </div>
      </div>
    );
  }
}

export default SessionForm;
