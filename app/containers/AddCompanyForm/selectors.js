import { createSelector } from 'reselect';

export const selectAddCompany = state => state.get('addCompany');

export const selectErrorMessage = createSelector(selectAddCompany, addCompany =>
  addCompany.get('errorMessage'),
);
