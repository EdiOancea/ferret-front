import { takeLatest, put } from 'redux-saga/effects';
import ls from 'local-storage';

import signInRequest from 'services/signInRequest';
import { SIGN_IN } from './constants';
import { signInSuccess, signInFailure } from './actions';
import { showLoader, hideLoader } from 'containers/App/actions';

export function* signIn(action) {
  const { data } = action;
  const response = yield signInRequest(data);
  if (response.token) {
    ls.set('token', response.token);
    yield put(signInSuccess(response.token));
  } else {
    yield put(signInFailure(response.message));
  }
}

export default function* requestSignInSaga() {
  yield takeLatest(SIGN_IN, signIn);
}
