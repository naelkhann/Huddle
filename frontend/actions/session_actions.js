import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(dispatch(receiveCurrentUser(null)))
);
