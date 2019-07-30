import { takeLatest, put } from 'redux-saga/effects';
import ls from 'local-storage';

import userService from 'services/user';
import { SIGN_IN } from './constants';
import { signInSuccess, signInFailure } from './actions';

export function* signIn(action) {
  const { data } = action;
  const response = yield userService.signIn(data);
  if (response.token) {
    yield put(signInSuccess(response.token));
  } else {
    yield put(signInFailure(response.message));
  }
}

export default function* requestSignInSaga() {
  yield takeLatest(SIGN_IN, signIn);
}
