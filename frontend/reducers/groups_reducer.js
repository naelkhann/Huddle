import { RECEIVE_GROUPS } from '../actions/groups_actions';

const GroupsReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_GROUPS:
      const receiveGroupsState = Object.assign({}, state, action.groups);
      return receiveGroupsState;
    default: return state;
  }
};

export default GroupsReducer;
