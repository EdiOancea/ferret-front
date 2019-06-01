import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import UserContent from 'components/UserContent';
import {
  selectToken,
  selectLoggedUserMeta,
  selectLoggedUserId
} from 'containers/app/selectors';
import { getUser } from './actions';
import saga from './saga';

class UserPage extends React.Component {
  componentDidMount() {
    const { onLoad, loggedUserId } = this.props;

    onLoad(loggedUserId);
  }

  render() {
    const { loggedUserMeta } = this.props;

    return <UserContent {...loggedUserMeta} />;
  }
};

UserPage.propTypes = {
  onLoad: PropTypes.func.isRequired,
  loggedUser: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  loggedUserMeta: selectLoggedUserMeta,
  loggedUserId: selectLoggedUserId,
});

const mapDispatchToProps = dispatch => ({
  onLoad: id => dispatch(getUser(id)),
});

const withSaga = injectSaga({
  key: 'loggedUser',
  saga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withConnect,
)(UserPage);
