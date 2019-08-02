import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import UserContent from 'components/UserContent';
import {
  selectLoggedUserMeta,
  selectLoggedUserId,
} from 'containers/App/selectors';

/* eslint-disable react/prefer-stateless-function */
class UserPage extends React.Component {
  render() {
    const { loggedUserMeta } = this.props;

    return <UserContent {...loggedUserMeta} />;
  }
}

UserPage.propTypes = {
  loggedUserId: PropTypes.number,
  loggedUserMeta: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loggedUserMeta: selectLoggedUserMeta,
  loggedUserId: selectLoggedUserId,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default withConnect(UserPage);
