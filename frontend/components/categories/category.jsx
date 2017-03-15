import { connect } from 'react-redux';
import React from 'react';
import { getCategories, getCategory } from '../../actions/categories_actions';
import GroupItem from '../groups/group_item';
import LoadingIcon from '../loading_icon';

const mapStateToProps = (state, ownProps) => {
  const myId = parseInt(ownProps.params.categoryId);
  const category = state.category;
  const groups = state.category.groups;
  const loading = state.loading.loading;
  return {
    myId,
    category,
    groups,
    loading
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
    const {myId, category, groups, loading} = this.props;
    return loading ? <LoadingIcon /> :
    (<div>
      <div className="category-poster">
        <img className="category-poster-img" src={category.cover} />
        <div className="category-poster-inner">
          <h1>{category.name} Huddles</h1>
        </div>
      </div>
      <div className="category-groups-container">
        {this.renderGroups()}
      </div>
    </div>);
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
