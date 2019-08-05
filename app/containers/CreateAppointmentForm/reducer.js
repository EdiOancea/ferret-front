import { fromJS } from 'immutable';

import {
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_APPOINTMENT_FAILURE,
} from './constants';

const initialState = fromJS({
  errorMessage: '',
});

const createAppointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENT_SUCCESS:
      return state.set('errorMessage', '');
    case CREATE_APPOINTMENT_FAILURE:
      return state.set('errorMessage', action.errorMessage);
    default:
      return state;
  }
};

export default createAppointmentReducer;
