import { RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER } from '../actions/session_actions';

import {RECEIVE_JOINED_GROUP} from '../actions/groups_users_actions';

import merge from 'lodash/merge';

let defaultUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = defaultUser, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      const receiveUserState = Object.assign({}, state, {currentUser});
      return receiveUserState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      const receiveErrorsState = Object.assign({}, state, {errors});
      return receiveErrorsState;
    case RECEIVE_JOINED_GROUP:
      const newState = merge({}, state);
      newState.currentUser.memberships.push(action.groupId);
      return newState;
    default: return state;
  }
};

export default SessionReducer;
