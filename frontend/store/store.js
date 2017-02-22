import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const logger = createLogger();
const configureStore = (preloadedState = {}) => {
  return createStore(
    RootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  );
};

export default configureStore;
