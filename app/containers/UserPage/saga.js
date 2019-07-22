import ls from 'local-storage';
import { takeLatest, put } from 'redux-saga/effects';

import parseJwt from 'services/parseJwt';
import getUserRequest from 'services/getUserRequest';
import { storeUserId } from 'containers/SignInForm/actions';
import { getUserSuccess, getUserFailure } from 'containers/App/actions';
import { GET_USER } from './constants';

export function* getUser(action) {
  const { id } = action;
  if (!id) {
    const { id: userId } = parseJwt(ls.get('token'));
    yield put(storeUserId(userId));
  }
  const userId = id || parseJwt(ls.get('token')).id;
  const response = yield getUserRequest(userId);
  if (response.id !== undefined) {
    yield put(getUserSuccess(response));
  } else {
    yield put(getUserFailure());
  }
}

export default function* requestGetUserSaga() {
  yield takeLatest(GET_USER, getUser);
}
