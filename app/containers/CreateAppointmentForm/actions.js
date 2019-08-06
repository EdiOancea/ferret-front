import {
  CREATE_APPOINTMENT,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
} from './constants';

export const createAppointment = data => ({
  type: CREATE_APPOINTMENT,
  data,
});

export const createAppointmentSuccess = () => ({
  type: CREATE_APPOINTMENT_SUCCESS,
});

export const createAppointmentFailure = errorMessage => ({
  type: CREATE_APPOINTMENT_FAILURE,
  errorMessage,
});
