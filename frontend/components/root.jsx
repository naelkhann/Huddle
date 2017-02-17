import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import UserIndex from './user/user_index';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <Route path="/login" component={ SessionFormContainer } />
        <Route path="/register" component={ SessionFormContainer } />
        <Route path="/user" component={ UserIndex } />
      </Route>
    </Router>
  </Provider>
);

export default Root;
