import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, START_LOADING, STOP_LOADING } from '../actions/categories_actions';

const loadingState = {
  loading: false
};

const LoadingReducer = (state = loadingState, action) => {
  switch(action.type){
    case START_LOADING:
      return Object.assign({}, state, { loading: true });
    case STOP_LOADING:
      return loadingState;
    default: return state;
  }
};

export default LoadingReducer;
