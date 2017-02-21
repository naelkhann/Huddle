import { RECEIVE_GROUP, REMOVE_GROUP } from '../actions/groups_actions';

const GroupReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_GROUP:
      return action.group;
    default: return state;
  }
};

export default GroupReducer;
