export const getGroups = (filter) => {
  return $.ajax({
    method: 'GET',
    url: `api/groups`,
    data: { filter }
  });
};

export const getGroup = id => {
  return $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  });
};

export const createGroup = obj => {
  return $.ajax({
    method: 'POST',
    url: `api/groups`,
    data: { group: obj }
  });
};

export const deleteGroup = group => {
  return $.ajax({
    method: 'DELETE',
    url: `api/groups/${group.id}`
  });
};
