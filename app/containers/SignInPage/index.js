import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import { requestSignIn } from './actions';
import {
  makeSelectToken,
  makeSelectMessage,
} from './selectors';
import SignInForm from '../../components/SignInForm/SignInForm';

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  changeInput(input, value) {
    this.setState({ [input]: value });
  }

  handleButtonClick() {
    const { submitForm } = this.props;
    const { email, password } = this.state;

    submitForm({ email, password });
  }

  render() {
    return (
      <SignInForm
      {...{
        onEmailChange: e => this.changeInput('email', e.target.value),
        onPasswordChange: e => this.changeInput('password', e.target.value),
        onCheckboxChange: e => this.changeInput('checkbox', e.target.checked),
        onButtonClick: () => this.handleButtonClick(),
      }}
      />
    );
  }
};

SignInPage.propTypes = {
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  token: makeSelectToken(),
  message: makeSelectMessage(),
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(requestSignIn(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({
  key: 'signIn',
  reducer,
});

const withSaga = injectSaga({
  key: 'signIn',
  saga,
});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SignInPage);
