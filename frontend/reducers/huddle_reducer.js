import { RECEIVE_HUDDLE, REMOVE_HUDDLE } from '../actions/huddles_actions';

const HuddleReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_HUDDLE:
      return action.huddle;
    default: return state;
  }
};

export default HuddleReducer;
