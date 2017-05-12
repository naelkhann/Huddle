import * as HuddlesAPIUtil from '../util/huddles_api_util';

export const RECEIVE_HUDDLE = "RECEIVE_HUDDLE";
export const REMOVE_HUDDLE = "REMOVE_HUDDLE";

const receiveHuddle = (huddle) => ({
  type: RECEIVE_HUDDLE,
  huddle
});


export const getHuddle = (id) => dispatch => (
  HuddlesAPIUtil.getHuddle(id).then(
    huddle => dispatch(receiveHuddle(huddle)))
);

export const createHuddle = (huddle) => dispatch => (
  HuddlesAPIUtil.createHuddle(huddle)
);
