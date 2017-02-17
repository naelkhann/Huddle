
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as SessionAPIUtil from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.logout = SessionAPIUtil.logout;
  window.store = store;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
