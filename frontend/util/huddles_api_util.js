export const getHuddles = (filter) => {
  return $.ajax({
    method: 'GET',
    url: `api/huddles`,
    data: { filter }
  });
};

export const getHuddle = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/huddles/${id}`
  });
};

export const createHuddle = (obj) => {
  return $.ajax({
    method: 'POST',
    url: `api/huddles`,
    data: { huddle: obj }
  });
};

export const deleteHuddle = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/huddles/${id}`
  });
};
