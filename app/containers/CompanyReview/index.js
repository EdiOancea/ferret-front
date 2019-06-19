import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as Yup from 'yup';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import CompanyReviewComponent from 'components/CompanyReview';
import {
  selectErrorMessage,
  selectHasReviewed,
  selectCanComment,
  selectRating,
} from './selectors';
import { addReview, setCanComment } from './actions';
import reducer from './reducer';
import saga from './saga';

const config = {
  initialValues: {
    comment: '',
  },
  validationSchema: Yup.object().shape({
    comment: Yup.string('').required('This field is required.'),
  }),
  fields: [
    {
      type: 'input',
      options: {
        type: 'comment',
        label: 'Comment',
        name: 'comment',
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
class CompanyReview extends React.Component {
  render() {
    return (
      <CompanyReviewComponent
        onSubmit={values =>
          this.props.onSubmit({
            rating: this.props.rating,
            companyId: this.props.companyId,
            ...values,
          })
        }
        rating={this.props.rating}
        onRating={this.props.onRating}
        errorMessage={this.props.errorMessage}
        hasReviewed={this.props.hasReviewed}
        canComment={this.props.canComment}
        {...{
          ...config,
        }}
      />
    );
  }
}

CompanyReview.propTypes = {
  companyId: PropTypes.number.isRequired,
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  onRating: PropTypes.func.isRequired,
  hasReviewed: PropTypes.bool.isRequired,
  canComment: PropTypes.bool.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
  hasReviewed: selectHasReviewed,
  canComment: selectCanComment,
  rating: selectRating,
});

export const mapDispatchToProps = dispatch => ({
  onRating: value => dispatch(setCanComment(value)),
  onSubmit: values => dispatch(addReview(values)),
});

const withReducer = injectReducer({
  key: 'addReview',
  reducer,
});

const withSaga = injectSaga({
  key: 'addReview',
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
)(CompanyReview);
