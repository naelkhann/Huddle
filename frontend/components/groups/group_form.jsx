import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import { getCategories } from '../../actions/categories_actions';
import { createGroup } from '../../actions/groups_actions';
import * as Selectors from '../../reducers/selectors';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  categories: Selectors.arrayOfCategories(state)
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories())
});

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      categories: []
    };
    this.changeCategoriesState = this.changeCategoriesState.bind(this);
  }

  componentDidMount(){
    this.props.getCategories();
  }

  renderForNullUser(){
    if(!this.props.currentUser){
      return (
        <div className="group-form-cover">
          <h1>You must be logged in to create a Group!</h1>
          <Link to="/login">Log in</Link>
        </div>
      );
    }
  }

  renderForUser(){
    if(this.props.currentUser){
      return (
        <div className="group-form-cover">
          <h1>Start a new Group</h1>
          <h2>Let's make a community around your interests!</h2>
        </div>
      );
    }
  }

  changeCategoriesState(categoryId){
    const selectedCategories = this.state.categories.slice();
    if(selectedCategories.includes(categoryId)){
      const deleteId = selectedCategories.indexOf(categoryId);
      selectedCategories.splice(deleteId, 1);
      this.setState({categories: selectedCategories});
    } else {
      this.setState({categories: selectedCategories.concat(categoryId)});
    }
  }

  updateProperty(property){
    return (e) => (
      this.setState({[property]: e.target.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
    alert("annoying");
  }

  renderCheckboxes(){

    const checkboxes = this.props.categories.map((category, idx) => (
      <label key={idx}>{category.name}
        <input type="checkbox"
          value={category.name}
          checked={this.state.categories.includes(category.id)}
          onChange={() => this.changeCategoriesState(category.id)} />
        <br />
      </label>
    ));
    return checkboxes;
  }

  render(){
    return(
      <div className="group-form-wrapper">
        {this.props.currentUser ?
          this.renderForUser() :
          this.renderForNullUser()}

        <form onSubmit={this.handleSubmit}>
          <label>Which categories do your Group belong to? <br />
            {this.renderCheckboxes()}
          </label>

          <label>Group Name:
            <input type="text" value={this.state.name} onChange={this.updateProperty("name")} />
          </label>

          <label>Group Description:
            <textarea value={this.state.description} onChange={this.updateProperty("description")} />
          </label>

          <input type="submit" value="Make Group"/>
        </form>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);
