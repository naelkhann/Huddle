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
      <li key={idx}>{cat.name}</li>
    ));
    return (
      <ul>
        {categoriesNames}
      </ul>
    );
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoriesIndex);
