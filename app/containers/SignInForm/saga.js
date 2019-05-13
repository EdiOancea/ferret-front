import { takeLatest, put } from 'redux-saga/effects';

import signInRequest from 'services/signInRequest';
import { SIGN_IN } from './constants';
import { signInSuccess, signInFailed } from './actions';

export function* signIn(action) {
  const { data } = action;
  const response = yield signInRequest(data);
  if (response.token) {
    yield put(signInSuccess(response.token));
  } else {
    yield put(signInFailed(response.message));
  }
}

export default function* requestSignInSaga() {
  yield takeLatest(SIGN_IN, signIn);
}
