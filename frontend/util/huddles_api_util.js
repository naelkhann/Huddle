export const getHuddle = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/huddles/${id}`
  });
};

export const createHuddle = (huddle) => {
  return $.ajax({
    method: 'POST',
    url: `api/huddles`,
    data: huddle
  });
};

export const deleteHuddle = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/huddles/${id}`
  });
};
