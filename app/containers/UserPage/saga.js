import { takeLatest, put } from 'redux-saga/effects';

import getUserRequest from 'services/getUserRequest';
import { getUserSuccess, signOut } from 'containers/App/actions';
import { GET_USER } from './constants';

export function* getUser(action) {
  const { id } = action;
  const response = yield getUserRequest(id);
  if (response.id !== undefined) {
    yield put(getUserSuccess(response));
  } else {
    yield put(signOut());
  }
}

export default function* requestGetUserSaga() {
  yield takeLatest(GET_USER, getUser);
}
