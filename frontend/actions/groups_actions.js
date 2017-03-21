import * as GroupAPIUtil from '../util/groups_api_util';

export const RECEIVE_CHANGE = "RECEIVE_CHANGE";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

const receiveChange = (properties) => ({
  type: RECEIVE_CHANGE,
  properties
});

const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});

const removeGroup = (group) => ({
  type: REMOVE_GROUP,
  group
});

const startLoading = () => ({
  type: START_LOADING
});

const stopLoading = () => ({
  type: STOP_LOADING
});

export const getGroups = (filter) => dispatch => (
  GroupAPIUtil.getGroups(filter).then(
    groups => dispatch(receiveGroups(groups))
  )
);

export const getGroup = group => dispatch => {
  dispatch(startLoading());
  return GroupAPIUtil.getGroup(group).then(
    res => dispatch(receiveGroup(res))).then(
      () => (setTimeout(() => dispatch(stopLoading()), 500)));
};

export const createGroup = group => dispatch => (
  GroupAPIUtil.createGroup(group)
);

export const deleteGroup = group => dispatch => (
  GroupAPIUtil.deleteGroup(group).then(
    res => dispatch(removeGroup(res)))
);
