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
  getCategories: () => dispatch(getCategories()),
  createGroup: (group) => dispatch(createGroup(group))
});

class GroupForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      category_ids: []
    };
    this.changeCategoriesState = this.changeCategoriesState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const selectedCategories = this.state.category_ids.slice();
    if(selectedCategories.includes(categoryId)){
      const deleteId = selectedCategories.indexOf(categoryId);
      selectedCategories.splice(deleteId, 1);
      this.setState({category_ids: selectedCategories});
    } else {
      this.setState({category_ids: selectedCategories.concat(categoryId)});
    }
  }

  updateProperty(property){
    return (e) => (
      this.setState({[property]: e.target.value})
    );
  }

  handleSubmit(e){
    e.preventDefault();
    const group = {
      name: this.state.name,
      description: this.state.description,
      category_ids: this.state.category_ids
    };
    this.props.createGroup(group).then(
      () => this.props.router.push(`/`)
    );
  }

  renderCheckboxes(){

    const checkboxes = this.props.categories.map((category, idx) => (
      <label key={idx}>{category.name}
        <input type="checkbox"
          value={category.name}
          checked={this.state.category_ids.includes(category.id)}
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

        <form className="group-form" onSubmit={this.handleSubmit}>
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
)(withRouter(GroupForm));
