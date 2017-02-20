export const getCategories = () => {
  return $.ajax({
    method: 'GET',
    url: `api/categories`
  });
};

export const getCategory = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/categories/${id}`
  });
};
