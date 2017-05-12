export const createHuddlesUser = (huddles_user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/huddles_users',
    data: {huddles_user}
  });
};

export const deleteHuddlesUser = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/huddles/${id}/rsvps`
  });
};
