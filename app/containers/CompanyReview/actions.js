import {
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  REVIEW_EXISTS,
  REVIEW_EXISTS_SUCCESS,
  REVIEW_EXISTS_FAILURE,
} from './constants';

export const addReview = data => ({
  type: ADD_REVIEW,
  data,
});

export const addReviewSuccess = review => ({
  type: ADD_REVIEW_SUCCESS,
  review,
  wasReviewed: true,
});

export const addReviewFailure = errorMessage => ({
  type: ADD_REVIEW_FAILURE,
  errorMessage,
});

export const reviewExists = (userId, companyId) => ({
  type: REVIEW_EXISTS,
  userId,
  companyId,
});

export const reviewExistsSuccess = () => ({
  type: REVIEW_EXISTS_SUCCESS,
  wasReviewed: true,
});

export const reviewExistsFailure = () => ({
  type: REVIEW_EXISTS_FAILURE,
  wasReviewed: false,
});
