import { takeLatest, put } from 'redux-saga/effects';

import userService from 'services/user';
import { GET_USER } from 'containers/UserPage/constants';
import { getUserSuccess, signOut } from './actions';

export function* getUser(action) {
  const { id } = action;
  const response = yield userService.get(id);
  if (response.id !== undefined) {
    yield put(getUserSuccess(response));
  } else {
    yield put(signOut());
  }
}

export default function* requestGetUserSaga() {
  yield takeLatest(GET_USER, getUser);
}
