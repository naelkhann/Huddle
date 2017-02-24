import { RECEIVE_GROUPS } from '../actions/groups_actions';

const GroupsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_GROUPS:
      return action.groups;
    default: return state;
  }
};

export default GroupsReducer;
