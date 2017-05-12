import * as HuddlesUsersAPIUtil from '../util/huddles_users_api_util';

export const RECEIVE_JOINED_HUDDLE = "RECEIVE_JOINED_HUDDLE"

const receiveJoinedHuddle = (huddleId) =>({
  type: RECEIVE_JOINED_HUDDLE,
  huddleId
});

export const createHuddlesUser = (huddles_user) => dispatch => (
  HuddlesUsersAPIUtil.createHuddlesUser(huddles_user).then((res) => dispatch(receiveJoinedHuddle(res.huddle_id)))
);

export const deleteHuddlesUser = (id) => dispatch => (
  HuddlesUsersAPIUtil.deleteHuddlesUser(id)
);
