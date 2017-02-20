import { connect } from 'react-redux';
import React from 'react';
import { getCategories, getCategory } from '../../actions/categories_actions';
import GroupItem from '../groups/group_item';

const mapStateToProps = (state, ownProps) => {
  const myId = parseInt(ownProps.params.categoryId);
  const category = state.category;
  const groups = state.category.groups;
  return {
    myId,
    category,
    groups
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCategory: id => dispatch(getCategory(id)),
  getCategories: () => dispatch(getCategories())
});

class Category extends React.Component {
  componentDidMount(){
    this.props.getCategory(this.props.myId);
  }

  renderGroups(){
    if(this.props.groups){
      return(
        this.props.groups.map((group, idx) => <GroupItem key={idx} group={group}/>)
      );
    }
  }

  render(){
    const {myId, category, groups} = this.props;
    return (
      <div>
        <div className="category-poster">
          <div className="category-poster-inner">
            <h1>{category.name}</h1>
          </div>
        </div>
        <div className="category-groups-container">
          {this.renderGroups()}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
