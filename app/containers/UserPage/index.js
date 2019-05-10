import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import UserContent from 'components/UserContent';
import { selectToken } from 'containers/App/selectors';
import { selectUserName } from './selectors';
import { getUser } from './actions';
import reducer from './reducer';
import saga from './saga';

class UserPage extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.token);
  }

  render() {
    return <UserContent {...this.props} />;
  }
}

UserPage.propTypes = {
  onLoad: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  name: selectUserName,
  token: selectToken,
});

const mapDispatchToProps = dispatch => ({
  onLoad: token => dispatch(getUser(token)),
});

const withReducer = injectReducer({
  key: 'user',
  reducer,
});

const withSaga = injectSaga({
  key: 'user',
  saga,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(UserPage);
