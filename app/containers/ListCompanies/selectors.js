import { createSelector } from 'reselect';

export const selectGetCompanies = state => state.get('getCompanies');

export const selectCompanies = createSelector(
  selectGetCompanies,
  getCompanies => getCompanies.get('companies'),
);
export const selectErrorMessage = createSelector(
  selectGetCompanies,
  getCompanies => getCompanies.get('errorMessage'),
);
