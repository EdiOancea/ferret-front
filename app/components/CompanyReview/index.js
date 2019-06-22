import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'material-ui-rating';
import Divider from '@material-ui/core/Divider';

import Line from 'components/Line/Loadable';
import FormComponent from 'components/FormComponent';

const CompanyReview = props => {
  const {
    wasReviewed,
    canComment,
    onRating,
    onSubmit,
    errorMessage,
    rating,
    ...config
  } = props;

  const renderCommentForm = () =>
    canComment ? (
      <>
        <FormComponent
          onSubmit={onSubmit}
          errorMessage={errorMessage}
          {...{ ...config }}
        />
        <Divider />
      </>
    ) : null;

  const renderReviewForm = () =>
    !wasReviewed ? (
      <>
        <Line label="Rating">
          <Rating value={rating} max={5} onChange={value => onRating(value)} />
        </Line>
        <Divider />
        {renderCommentForm()}
      </>
    ) : null;

  return renderReviewForm();
};

CompanyReview.propTypes = {
  errorMessage: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  wasReviewed: PropTypes.bool.isRequired,
  canComment: PropTypes.bool.isRequired,
  fields: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  validationSchema: PropTypes.object.isRequired,
  onRating: PropTypes.func.isRequired,
};

export default CompanyReview;
