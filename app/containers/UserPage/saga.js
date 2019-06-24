import { takeLatest, put } from 'redux-saga/effects';

import getUserRequest from 'services/getUserRequest';
import { getUserSuccess, getUserFailure } from 'containers/app/actions';
import { GET_USER } from './constants';

export function* getUser(action) {
  const { id } = action;
  const response = yield getUserRequest(id);
  if (response.id !== undefined) {
    yield put(getUserSuccess(response));
  } else {
    yield put(getUserFailure());
  }
}

export default function* requestGetUserSaga() {
  yield takeLatest(GET_USER, getUser);
}
