import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectToken } from 'containers/App/selectors';
import { Redirect } from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import PaperFrame from 'components/PaperFrame';
import SignInForm from 'containers/SignInForm';

class SignInPage extends React.Component {
  render() {
    return this.props.token === '' ? (
      <PaperFrame headerText="Sign in" icon={<LockOutlinedIcon />}>
        <SignInForm />
      </PaperFrame>
    ) : (
      <Redirect
        to={{
          pathname: '/home',
        }}
      />
    );
  }
}

SignInPage.propTypes = {
  token: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default withConnect(SignInPage);
