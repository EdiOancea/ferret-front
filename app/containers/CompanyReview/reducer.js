import { fromJS } from 'immutable';

import {
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  REVIEW_EXISTS_SUCCESS,
  REVIEW_EXISTS_FAILURE,
} from './constants';

const initialState = fromJS({
  errorMessage: '',
  wasReviewed: true,
  rating: 0,
});

const addReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW_SUCCESS:
      return state
        .set('errorMessage', '')
        .set('wasReviewed', action.wasReviewed)
        .set('rating', action.rating);
    case ADD_REVIEW_FAILURE:
      return state.set('errorMessage', action.errorMessage);
    case REVIEW_EXISTS_SUCCESS:
      return state
        .set('wasReviewed', action.wasReviewed)
        .set('rating', action.rating);
    case REVIEW_EXISTS_FAILURE:
      return state.set('wasReviewed', action.wasReviewed);
    default:
      return state;
  }
};

export default addReviewReducer;
