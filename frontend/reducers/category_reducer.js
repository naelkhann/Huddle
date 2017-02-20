import { RECEIVE_CATEGORY } from '../actions/categories_actions';

const CategoryReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_CATEGORY:
      const receiveCategoryState = Object.assign({}, state, action.category);
      return receiveCategoryState;
    default: return state;
  }
};

export default CategoryReducer;
