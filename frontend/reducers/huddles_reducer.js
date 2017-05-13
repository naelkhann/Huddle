import { RECEIVE_HUDDLES } from '../actions/huddles_actions';

const HuddlesReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_HUDDLES:
      return action.huddles;
    default: return state;
  }
}

export default HuddlesReducer;
