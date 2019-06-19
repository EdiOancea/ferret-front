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
import { selectErrorMessage, selectHasReviewed } from './selectors';
import { addReview } from './actions';
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

class CompanyReview extends React.Component {
  state = {
    canComment: false,
    rating: 0,
  };

  onRating(rating) {
    const { state } = this;
    this.setState({
      canComment: true,
      rating,
      ...state,
    });
  }

  render() {
    return (
      <CompanyReviewComponent
        onSubmit={values =>
          this.props.onSubmit({
            userId: this.props.loggedUserId,
            companyId: this.props.companyId,
            rating: this.state.rating,
            ...values,
          })
        }
        rating={this.state.rating}
        onRating={this.onRating}
        errorMessage={this.props.errorMessage}
        hasReviewed={this.props.hasReviewed}
        canComment={this.state.canComment}
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
  hasReviewed: PropTypes.bool.isRequired,
  loggedUserId: PropTypes.number.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
  loggedUserId: selectLoggedUserId,
  hasReviewed: selectHasReviewed,
});

export const mapDispatchToProps = dispatch => ({
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
