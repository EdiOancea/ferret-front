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
import { addCompany } from './actions';
import reducer from './reducer';
import saga from './saga';

const config = {
  initialValues: {
    name: '',
    address: '',
    business: '',
    rating: '',
    manager: '',
    active: '',
  },
  validationSchema: Yup.object().shape({
    name: Yup.string('')
      .email('Invalid email address.')
      .required('This field is required.'),
    address: Yup.string().required('This field is required'),
    business: Yup.string().required('This field is required'),
    rating: Yup.string(),
    manager: Yup.string(),
    active: Yup.string(),
  }),
  fields: [
    {
      type: 'input',
      options: {
        type: 'name',
        label: 'Name',
        name: 'name',
      },
    },
    {
      type: 'input',
      options: {
        type: 'address',
        label: 'Address',
        name: 'address',
      },
    },
    {
      type: 'input',
      options: {
        type: 'business',
        label: 'Business',
        name: 'business',
      },
    },
    {
      type: 'input',
      options: {
        type: 'rating',
        label: 'Rating',
        name: 'rating',
      },
    },
    {
      type: 'input',
      options: {
        type: 'manager',
        label: 'Manager',
        name: 'manager',
      },
    },
    {
      type: 'input',
      options: {
        type: 'active',
        label: 'Active',
        name: 'active',
      },
    },
    {
      type: 'button',
      options: {
        text: 'SUBMIT',
        name: 'submitButton',
      },
    },
  ],
};

export class AddCompanyForm extends React.Component {
  state = {};

  render() {
    return <FormComponent {...{ ...config, ...this.props }} />;
  }
}

AddCompanyForm.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(addCompany(values)),
});

const withReducer = injectReducer({
  key: 'addCompany',
  reducer,
});

const withSaga = injectSaga({
  key: 'addCompany',
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
)(AddCompanyForm);
