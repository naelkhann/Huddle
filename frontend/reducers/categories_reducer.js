import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/categories_actions';

const CategoriesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CATEGORIES:
      const receiveCategoriesState = Object.assign({}, state, action.categories);
      return receiveCategoriesState;
    default: return state;
  }
};

export default CategoriesReducer;
