import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as Yup from 'yup';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import FormComponent from 'components/FormComponent';
import { selectErrorMessage } from './selectors';
import { signIn } from './actions';
import reducer from './reducer';
import saga from './saga';

const config = {
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: Yup.object().shape({
    email: Yup.string('')
      .email('Invalid email address.')
      .required('This field is required.'),
    password: Yup.string().required('This field is required'),
  }),
  fields: [
    {
      type: 'input',
      options: {
        type: 'email',
        label: 'Email Address',
        name: 'email',
      },
    },
    {
      type: 'input',
      options: {
        type: 'password',
        label: 'Password',
        name: 'password',
      },
    },
    {
      type: 'checkbox',
      options: {
        label: 'Remember me',
        name: 'checkbox',
      },
    },
    {
      type: 'button',
      options: {
        text: 'SIGN IN',
        name: 'submitButton',
      },
    },
  ],
};

const SignInForm = props => <FormComponent {...{ ...config, ...props }} />;

SignInForm.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(signIn(values)),
});

const withReducer = injectReducer({
  key: 'signIn',
  reducer,
});

const withSaga = injectSaga({
  key: 'signIn',
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
)(SignInForm);
