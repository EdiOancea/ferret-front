import { createSelector } from 'reselect';

export const selectSignIn = state => state.get('signIn');

export const selectErrorMessage = createSelector(selectSignIn, signIn =>
  signIn.get('errorMessage'),
);
