import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import CategoriesIndex from './categories/categories_index';
import Category from './categories/category';
import Group from './groups/group';
import SessionFormContainer from './session/session_form_container';
import UserIndex from './user/user_index';



const Root = ({store}) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ App }>
          <IndexRoute component={ CategoriesIndex } />
          <Route path="categories/:categoryId" component={ Category } />
          <Route path="groups/:groupId" component={ Group } />
          <Route path="/login" component={ SessionFormContainer } />
          <Route path="/register" component={ SessionFormContainer } />
          <Route path="/user" component={ UserIndex } onEnter={_redirectIfLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
