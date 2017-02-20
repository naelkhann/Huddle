import { RECEIVE_GROUP, REMOVE_GROUP } from '../actions/groups_actions';

const GroupReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_GROUP:
      const receiveGroupState = Object.assign({}, state, action.group);
      return receiveGroupState;
    default: return state;
  }
};

export default GroupReducer;
