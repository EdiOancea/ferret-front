import {
  SET_RATING,
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  REVIEW_EXISTS,
  REVIEW_EXISTS_SUCCESS,
  REVIEW_EXISTS_FAILURE,
} from './constants';

export const setRating = rating => ({
  type: SET_RATING,
  rating,
});

export const addReview = data => ({
  type: ADD_REVIEW,
  data,
});

export const addReviewSuccess = review => ({
  type: ADD_REVIEW_SUCCESS,
  rating: review.rating,
  wasReviewed: true,
});

export const addReviewFailure = errorMessage => ({
  type: ADD_REVIEW_FAILURE,
  errorMessage,
});

export const reviewExists = companyId => ({
  type: REVIEW_EXISTS,
  companyId,
});

export const reviewExistsSuccess = review => ({
  type: REVIEW_EXISTS_SUCCESS,
  rating: review.rating,
  wasReviewed: true,
});

export const reviewExistsFailure = () => ({
  type: REVIEW_EXISTS_FAILURE,
  wasReviewed: false,
});
