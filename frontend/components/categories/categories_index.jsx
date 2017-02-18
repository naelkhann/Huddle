import { connect } from 'react-redux';
import React from 'react';
import { getCategories, getCategory } from '../../actions/categories_actions';
import { arrayOfCategories } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  categories: arrayOfCategories(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCategories: () => dispatch(getCategories()),
  getCategory: (id) => dispatch(getCategory(id))
});

class CategoriesIndex extends React.Component {
  componentDidMount(){
    this.props.getCategories();
  }

  render(){
    const categoriesNames = this.props.categories.map((cat, idx) => (
      <div key={idx} className="category-container">
        <div className="categories-images"></div>
        <h3 className="categories-names">{cat.name}</h3>
      </div>
    ));
    return (
      <div className="main-container-categories">
        <h1 className="categories-heading">Explore</h1>
        <div className="categories-container">
        {categoriesNames}
        </div>
      </div>
    );
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);
