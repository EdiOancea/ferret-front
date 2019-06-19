import { fromJS } from 'immutable';

import {
  ADD_REVIEW_SUCCESS,
  ADD_REVIEW_FAILURE,
  SET_HAS_REVIEWED,
} from './constants';

const initialState = fromJS({
  errorMessage: '',
  hasReviewed: false,
  canComment: false,
  rating: 0,
});

const addReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW_SUCCESS:
      return state.set('errorMessage', '');
    case ADD_REVIEW_FAILURE:
      return state.set('errorMessage', action.errorMessage);
    case SET_HAS_REVIEWED:
      return state.set('hasReviewed', action.hasReviewed);
    default:
      return state;
  }
};

export default addReviewReducer;
