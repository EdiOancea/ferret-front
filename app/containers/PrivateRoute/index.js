import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { selectToken } from 'containers/App/selectors';

const renderOrRedirect = Component => {
  if (Component === undefined) {
    return (
      <Redirect
        to={{
          pathname: '/signin',
        }}
      />
    );
  }

  return <Component />;
};

class PrivateRoute extends React.Component {
  render() {
    return (
      <Route
        path={this.props.path}
        component={
          this.props.token === ''
            ? () => renderOrRedirect(this.props.Component)
            : this.props.PrivateComponent
        }
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default withConnect(PrivateRoute);
