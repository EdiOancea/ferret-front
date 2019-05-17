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
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectToken, selectLoading } from './selectors';

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from 'global-styles';
import AuthenticatedApp from 'components/AuthenticatedApp';
import NotAuthenticatedApp from 'components/NotAuthenticatedApp';
import Loading from 'components/Loading';

const renderItem = (isLoading, token) => {
  if (isLoading === true) {
    return <Loading />;
  }

  if (!token) {
    return <NotAuthenticatedApp />;
  }

  return <AuthenticatedApp />;
};

class App extends React.Component {
  render() {
    const { isLoading, token } = this.props;

    return (
      <div>
        {renderItem(isLoading, token)}
        <GlobalStyle />
      </div>
    );
  }
};

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  token: selectToken,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default withConnect(App);
