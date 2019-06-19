import { createSelector } from 'reselect';

export const selectAddReview = state => state.get('addReview');

export const selectErrorMessage = createSelector(selectAddReview, addReview =>
  addReview.get('errorMessage'),
);
export const selectHasReviewed = createSelector(selectAddReview, addReview =>
  addReview.get('hasReviewed'),
);
export const selectCanComment = createSelector(selectAddReview, addReview =>
  addReview.get('canComment'),
);
export const selectRating = createSelector(selectAddReview, addReview =>
  addReview.get('rating'),
);
