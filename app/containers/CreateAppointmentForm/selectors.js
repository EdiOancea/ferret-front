import { createSelector } from 'reselect';

export const selectCreateAppointment = state => state.get('createAppointment');

export const selectErrorMessage = createSelector(
  selectCreateAppointment,
  createAppointment => createAppointment.get('errorMessage'),
);
