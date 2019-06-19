import {
  ADD_REVIEW,
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  SET_HAS_REVIEWED,
  SET_CAN_COMMENT,
} from './constants';

export const addReview = data => ({
  type: ADD_REVIEW,
  data,
});

export const addReviewSuccess = review => ({
  type: ADD_REVIEW_SUCCESS,
  review,
});

export const addReviewFailure = errorMessage => ({
  type: ADD_REVIEW_FAILURE,
  errorMessage,
});

export const setHasReviewed = () => ({
  type: SET_HAS_REVIEWED,
  hasReviewed: true,
});

export const setCanComment = value => ({
  type: SET_CAN_COMMENT,
  canComment: true,
  rating: value,
});
