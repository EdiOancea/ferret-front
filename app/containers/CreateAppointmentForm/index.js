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
import { createAppointment } from './actions';
import reducer from './reducer';
import saga from './saga';

const config = {
  initialValues: {
    startTime: '',
    endTime: '',
  },
  validationSchema: Yup.object().shape({
    startTime: Yup.date()
      .min(new Date(), 'Date must be in the future.')
      .required('This field is required.'),
    endTime: Yup.date()
      .min(new Date(), 'Date must be in the future.')
      .required('This field is required.'),
  }),
  fields: [
    {
      type: 'input',
      options: {
        type: 'dateTime',
        label: 'Start Time',
        name: 'startTime',
      },
    },
    {
      type: 'input',
      options: {
        type: 'dateTime',
        label: 'End Time',
        name: 'endTime',
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

/* eslint-disable react/prefer-stateless-function */
export class CreateAppointmentForm extends React.Component {
  render() {
    const { onSubmit, companyId, errorMessage } = this.props;

    return (
      <FormComponent
        onSubmit={values =>
          onSubmit({
            ...values,
            companyId,
            status: 'pending',
          })
        }
        {...{ errorMessage, ...config }}
      />
    );
  }
}

CreateAppointmentForm.propTypes = {
  errorMessage: PropTypes.string,
  companyId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
});

export const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(createAppointment(values)),
});

const withReducer = injectReducer({
  key: 'createAppointment',
  reducer,
});

const withSaga = injectSaga({
  key: 'createAppointment',
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
)(CreateAppointmentForm);
