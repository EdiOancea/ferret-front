import { takeLatest, put, call } from 'redux-saga/effects';

import companyService from 'services/company';
import { handleApiErrors } from 'containers/App/actions';
import { CREATE_APPOINTMENT } from './constants';
import { createAppointmentSuccess, createAppointmentFailure } from './actions';

export function* createAppointment(action) {
  const { data } = action;
  let response;
  try {
    response = yield call(companyService.createAppointment, data);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.id) {
    yield put(createAppointmentSuccess(response));
  } else {
    yield put(createAppointmentFailure(response.message));
  }
}

export default function* requestCreateAppointmentSaga() {
  yield takeLatest(CREATE_APPOINTMENT, createAppointment);
}
