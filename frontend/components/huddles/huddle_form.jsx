import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { getCategories } from '../../actions/categories_actions';
import * as Selectors from '../../reducers/selectors.js';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  categories: Selectors.arrayOfCategories(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCategories: () => dispatch(getCategories()),
  createHuddle: (huddle) => dispatch(createHuddle(huddle))
});

class HuddleForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    };
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

  render(){
    return(
      <div className="huddle-form-wrapper">
        <div className="huddle-form-main-container">
          <div className="huddle-form-container">
              <h1>Inner</h1>
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
