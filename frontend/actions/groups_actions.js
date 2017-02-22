import * as GroupAPIUtil from '../util/groups_api_util';

export const RECEIVE_CHANGE = "RECEIVE_CHANGE";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

const receiveChange = (properties) => ({
  type: RECEIVE_CHANGE,
  properties
});

const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

const removeGroup = (group) => ({
  type: REMOVE_GROUP,
  group
});

export const getGroup = group => dispatch => (
  GroupAPIUtil.getGroup(group).then(
    res => dispatch(receiveGroup(res)))
);

export const deleteGroup = group => dispatch => (
  GroupAPIUtil.deleteGroup(group).then(
    res => dispatch(removeGroup(res)))
);
