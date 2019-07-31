import { takeLatest, put, call } from 'redux-saga/effects';

import userService from 'services/user';
import { GET_USER } from 'containers/UserPage/constants';
import { handleApiErrors, getUserSuccess, signOut } from './actions';

export function* getUser(action) {
  const { id } = action;
  let response;
  try {
    response = yield call(userService.get, id);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.id !== undefined) {
    yield put(getUserSuccess(response));
  } else {
    yield put(signOut());
  }
}

export default function* requestGetUserSaga() {
  yield takeLatest(GET_USER, getUser);
}
