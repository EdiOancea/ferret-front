import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import UserPage from 'containers/UserPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AuthenticatedApp = () => (
  <Switch>
    <Route path="/signin" component={UserPage} />
    <Route path="/home" component={UserPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default AuthenticatedApp;
