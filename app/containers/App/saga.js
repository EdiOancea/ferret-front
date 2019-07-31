import { takeLatest, put, call } from 'redux-saga/effects';

import userService from 'services/user';
import { GET_LOGGED_USER } from './constants';
import {
  handleApiErrors,
  getLoggedUserSuccess,
  getLoggedUserFailure,
} from './actions';

export function* getLoggedUser() {
  let response;
  try {
    response = yield call(userService.getLoggedUser);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.id !== undefined) {
    yield put(getLoggedUserSuccess(response));
  } else {
    yield put(getLoggedUserFailure());
  }
}

export default function* requestGetUserSaga() {
  yield takeLatest(GET_LOGGED_USER, getLoggedUser);
}
