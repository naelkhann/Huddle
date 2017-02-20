import * as APIUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});

export const getCategories = () => dispatch => (
  APIUtil.getCategories().then(categories => dispatch(receiveCategories(categories)))
);

export const getCategory = id => dispatch => (
  APIUtil.getCategory(id).then(category => dispatch(receiveCategory(category)))
);
