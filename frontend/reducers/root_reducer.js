import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CategoriesReducer from './categories_reducer';
import CategoryReducer from './category_reducer';
import GroupReducer from './group_reducer';
import HuddleReducer from './huddle_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  categories: CategoriesReducer,
  category: CategoryReducer,
  group: GroupReducer,
  huddle: HuddleReducer
});

export default RootReducer;
