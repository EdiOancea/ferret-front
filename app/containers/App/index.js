/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignInPage from 'containers/SignInPage/Loadable';
import UserPage from 'containers/UserPage/Loadable';
import PrivateRoute from 'containers/PrivateRoute';
import GlobalStyle from 'global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/signin" component={SignInPage} />
        <PrivateRoute path="/home" PrivateComponent={UserPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
