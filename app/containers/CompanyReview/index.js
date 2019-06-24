import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as Yup from 'yup';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import CompanyReviewComponent from 'components/CompanyReview';
import { selectLoggedUserId } from 'containers/App/selectors';
import {
  selectErrorMessage,
  selectWasReviewed,
  selectRating,
} from './selectors';
import { addReview, reviewExists as reviewExistsAction } from './actions';
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
        type: 'text',
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

class CompanyReview extends React.Component {
  state = {
    canComment: false,
  };

  componentDidMount() {
    const { reviewExists, userId, companyId } = this.props;
    reviewExists(userId, companyId);
  }

  onRating(rating) {
    const { state } = this;
    this.setState({
      ...state,
      canComment: true,
    });
  }

  render() {
    const {
      onSubmit,
      userId,
      companyId,
      errorMessage,
      wasReviewed,
      rating,
    } = this.props;
    const { canComment } = this.state;

    return (
      <CompanyReviewComponent
        onRating={(...params) => this.onRating(...params)}
        onSubmit={values =>
          onSubmit({
            userId,
            companyId,
            rating,
            ...values,
          })
        }
        {...{
          errorMessage,
          wasReviewed,
          canComment,
          rating,
          ...config,
        }}
      />
    );
  }
}

CompanyReview.propTypes = {
  reviewExists: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  companyId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  errorMessage: PropTypes.string,
  wasReviewed: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  userId: selectLoggedUserId,
  errorMessage: selectErrorMessage,
  wasReviewed: selectWasReviewed,
  rating: selectRating,
});

export const mapDispatchToProps = dispatch => ({
  reviewExists: (userId, companyId) =>
    dispatch(reviewExistsAction(userId, companyId)),
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
