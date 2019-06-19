import { createSelector } from 'reselect';

export const selectAddReview = state => state.get('addReview');

export const selectErrorMessage = createSelector(selectAddReview, addReview =>
  addReview.get('errorMessage'),
);
export const selectHasReviewed = createSelector(selectAddReview, addReview =>
  addReview.get('hasReviewed'),
);
