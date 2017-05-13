import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { getCategories } from '../../actions/categories_actions';
import * as Selectors from '../../reducers/selectors.js';
import { createHuddle } from '../../actions/huddles_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  categories: Selectors.arrayOfCategories(state)
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  createHuddle: (huddle) => dispatch(createHuddle(huddle))
});

class HuddleForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      location: "",
      description: "",
      date: undefined,
      time: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.getCategories();
  }

  renderForNullUser(){
    if(!this.props.currentUser){
      return (
        <div className="huddle-form-cover">
          <h1>You must be logged in to create a Huddle!</h1>
          <Link to="/register">Log in</Link>
        </div>
      );
    }
  }

  renderForUser(){
    if(this.props.currentUser){
      return (
        <div className="huddle-form-cover">
          <h1>Start a new Huddle</h1>
          <h2>Let's make a community around your interests!</h2>
        </div>
      );
    }
  }

  updateProperty(property){
    return (e) => (
      this.setState({[property]: e.target.value})
    );
  }

  parseDateAndTime(date, time){
    let a = new Date(date);
    let timeArray = time.split(":");
    a.setHours(timeArray[0]);
    a.setMinutes(timeArray[1]);
    return a;
  }

  handleSubmit(e){
    e.preventDefault();
    let huddleDateAndTime = this.parseDateAndTime(this.state.date, this.state.time);
    const huddle = {
      title: this.state.title,
      location: this.state.location,
      date: huddleDateAndTime,
      description: this.state.description,
      group_id: this.props.params.groupId,
      moderator_id: this.props.currentUser.id,
      founded_on: new Date()
    };
    this.props.createHuddle(huddle).then(
      () => this.props.router.push(`/`)
    );
  }

  render(){
    return(
      <div className="huddle-form-wrapper">
        <div className="huddle-form-main-container">
          <div className="huddle-form-container">
              <h1>Create A Huddle</h1>
              <form onSubmit={this.handleSubmit}>
              <br />
              <label className="huddle-form-labels">Huddle Title:
                <br />
                <input type="text" value={this.state.title} onChange={this.updateProperty("title")} />
              </label>
              <br /><br />
              <label className="huddle-form-labels">Huddle Location:
                <br />
                <input type="text" placeholder="Address for event" value={this.state.location} onChange={this.updateProperty("location")} />
              </label>
              <br /><br />
              <label className="huddle-form-labels">Huddle Date:
                <br />
                <input type="date" value={this.state.date} onChange={this.updateProperty("date")} />
              </label>
              <br /><br />
              <label className="huddle-form-labels">Huddle Time:
                <br />
                <input type="time" value={this.state.time} onChange={this.updateProperty("time")} />
              </label>
              <br /><br />
              <label className="huddle-form-labels">Huddle Description:
                <br />
                <textarea value={this.state.description} onChange={this.updateProperty("description")}/>
              </label>
              <br /><br />
              <input type="submit" className="huddle-form-submit-btn" value="Make Huddle"/>
              </form>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HuddleForm));
