export const createGroupsUser = (groups_user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/groups_users',
    data: {groups_user}
  });
};

export const deleteGroupsUser = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/groups_users/${id}`
  });
};
