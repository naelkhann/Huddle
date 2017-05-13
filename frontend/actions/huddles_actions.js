import * as HuddlesAPIUtil from '../util/huddles_api_util';

export const RECEIVE_HUDDLE = "RECEIVE_HUDDLE";
export const RECEIVE_HUDDLES = "RECEIVE_HUDDLES";
export const REMOVE_HUDDLE = "REMOVE_HUDDLE";

const receiveHuddle = (huddle) => ({
  type: RECEIVE_HUDDLE,
  huddle
});

const receiveHuddles = (huddles) => ({
  type: RECEIVE_HUDDLES,
  huddles
});

export const getHuddles = filter => dispatch => (
  HuddlesAPIUtil.getHuddles(filter).then(all => dispatch(receiveHuddles(all))
  )
);

export const getHuddle = (id) => dispatch => (
  HuddlesAPIUtil.getHuddle(id).then(
    huddle => dispatch(receiveHuddle(huddle)))
);

export const createHuddle = (huddle) => dispatch => (
  HuddlesAPIUtil.createHuddle(huddle)
);
