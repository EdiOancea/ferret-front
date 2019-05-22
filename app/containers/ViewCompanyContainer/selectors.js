import { createSelector } from 'reselect';

export const selectViewCompany = state => state.get('viewCompany');

export const selectCompany = createSelector(selectViewCompany, viewCompany =>
  viewCompany.get('company'),
);
export const selectErrorMessage = createSelector(
  selectViewCompany,
  viewCompany => viewCompany.get('errorMessage'),
);
