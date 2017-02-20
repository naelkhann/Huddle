export const getGroups = () => {
  return $.ajax({
    method: 'GET',
    url: `api/groups`
  });
};

export const getGroup = id => {
  return $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  });
};

export const createGroup = group => {
  return $.ajax({
    method: 'POST',
    url: `api/groups`,
    data: group
  });
};

export const deleteGroup = group => {
  return $.ajax({
    method: 'DELETE',
    url: `api/groups/${group.id}`
  });
};
