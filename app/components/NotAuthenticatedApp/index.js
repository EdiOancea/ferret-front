import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from 'components/SignInPage/Loadable';
import AddCompanyPage from 'components/AddCompanyPage/Loadable';
import CompaniesListPage from 'components/CompaniesListPage/Loadable';
import CompanyPage from 'components/CompanyPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';

const NotAuthenticatedApp = () => (
  <Switch>
    <Route path="/signin" component={SignInPage} />
    <Route path="/add-company" component={AddCompanyPage} />
    <Route path="/companies/:id" component={CompanyPage} />
    <Route path="/list-companies" component={CompaniesListPage} />
    <Route path="/home" component={HomePage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default NotAuthenticatedApp;
