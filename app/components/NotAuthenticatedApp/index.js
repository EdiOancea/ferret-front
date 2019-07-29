import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from 'components/SignInPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';

const NotAuthenticatedApp = () => (
  <Switch>
    <Route path="/signin" component={SignInPage} />
    <Route path="/home" component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default NotAuthenticatedApp;
