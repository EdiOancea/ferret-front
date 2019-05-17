import { createSelector } from 'reselect';

export const selectSignInDomain = state => state.get('signIn');

export const selectErrorMessage = createSelector(
  selectSignInDomain,
  signIn => signIn.get('errorMessage')
);
