import * as GroupsUsersAPIUtil from '../util/groups_users_api_util';

export const RECEIVE_JOINED_GROUP = "RECEIVE_JOINED_GROUP";

const receiveJoinedGroup = (groupId) =>({
  type: RECEIVE_JOINED_GROUP,
  groupId
});

export const createGroupsUser = (groups_user) => dispatch => (
  GroupsUsersAPIUtil.createGroupsUser(groups_user).then((res) => dispatch(receiveJoinedGroup(res.group_id)))
);

export const deleteGroupsUser = (id) => dispatch => (
  GroupsUsersAPIUtil.deleteGroupsUser(id)
);
