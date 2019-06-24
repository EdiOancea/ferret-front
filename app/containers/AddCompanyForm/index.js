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
    images: '',
  },
  validationSchema: Yup.object().shape({
    name: Yup.string('').required('This field is required.'),
    address: Yup.string().required('This field is required'),
    business: Yup.string().required('This field is required'),
    images: Yup.mixed().required('This field is required'),
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
        type: 'images',
        label: 'Images',
        name: 'images',
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
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <FormComponent {...{ ...config, ...this.props }} />;
  }
}

AddCompanyForm.propTypes = {
  errorMessage: PropTypes.string,
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
