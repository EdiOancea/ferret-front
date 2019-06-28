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

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import GlobalStyle from 'global-styles';
import AuthenticatedApp from 'components/AuthenticatedApp';
import NotAuthenticatedApp from 'components/NotAuthenticatedApp';
import Loading from 'components/Loading';
import { selectToken, selectLoading } from './selectors';
import { loadToken as loadTokenAction } from './actions';

const renderItem = (isLoading, token) => {
  if (isLoading === true) {
    return <Loading />;
  }

  if (!token) {
    return <NotAuthenticatedApp />;
  }

  return <AuthenticatedApp />;
};

/* eslint-disable react/prefer-stateless-function */
class App extends React.Component {
  componentDidMount() {
    this.props.loadToken();
  }

  render() {
    const { isLoading, token } = this.props;

    return (
      <div>
        {renderItem(isLoading, token)}
        <GlobalStyle />
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  loadToken: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoading,
  token: selectToken,
});

const mapDispatchToProps = dispatch => ({
  loadToken: () => dispatch(loadTokenAction()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(App);
