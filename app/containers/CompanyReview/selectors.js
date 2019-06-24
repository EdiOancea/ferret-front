import { createSelector } from 'reselect';

export const selectAddReview = state => state.get('addReview');

export const selectErrorMessage = createSelector(selectAddReview, addReview =>
  addReview.get('errorMessage'),
);
export const selectWasReviewed = createSelector(selectAddReview, addReview =>
  addReview.get('wasReviewed'),
);
export const selectRating = createSelector(selectAddReview, addReview =>
  addReview.get('rating'),
);
