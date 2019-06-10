import { createSelector } from 'reselect';

export const selectGetCompany = state => state.get('getCompany');

export const selectCompany = createSelector(selectGetCompany, getCompany =>
  getCompany.get('company'),
);
export const selectErrorMessage = createSelector(selectGetCompany, getCompany =>
  getCompany.get('errorMessage'),
);
