import * as APIUtil from '../util/categories_api_util';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const START_LOADING = "START_LOADING";
export const STOP_LOADING = "STOP_LOADING";

const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

const receiveCategory = (category) => ({
  type: RECEIVE_CATEGORY,
  category
});

const startLoading = () => ({
  type: START_LOADING
});

const stopLoading = () => ({
  type: STOP_LOADING
});

export const getCategories = () => dispatch => {
  return APIUtil.getCategories().then(categories => dispatch(receiveCategories(categories)));
};

export const getCategory = id => dispatch => {
  dispatch(startLoading());

  return APIUtil.getCategory(id).then(category => dispatch(receiveCategory(category))).then(
    () => (setTimeout(() => dispatch(stopLoading()), 1000)));
};
