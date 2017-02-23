import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import CategoriesIndex from './categories/categories_index';
import Category from './categories/category';
import Group from './groups/group';
import GroupForm from './groups/group_form';
import Huddle from './huddles/huddle';
import HuddleForm from './huddles/huddle_form';
import SessionFormContainer from './session/session_form_container';
import UserDashboard from './user/user_dashboard';


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
      replace('/user');
    }
  };


  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={ App }>
          <IndexRoute component={ CategoriesIndex } />
          <Route path="categories/:categoryId" component={ Category } />
          <Route path="groups/new" component={ GroupForm } />
          <Route path="groups/:groupId" component={ Group } />
          <Route path="huddles/new" component={ HuddleForm } />
          <Route path="huddles/:huddleId" component={ Huddle } />
          <Route path="/login" component={ SessionFormContainer } />
          <Route path="/register" component={ SessionFormContainer } />
          <Route path="/user" component={ UserDashboard } onEnter={_ensureLoggedIn} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
