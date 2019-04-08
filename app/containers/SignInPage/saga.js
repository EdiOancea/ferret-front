import { takeLatest, put, all } from 'redux-saga/effects';
import { toJS } from 'immutable';
import { REQUEST_SIGN_IN } from './constants';
import {
  requestSignInSuccess,
  requestSignInFailed,
 } from './actions';

import {
  makeSelectEmail,
  makeSelectPassword,
} from './selectors';

function* signIn(action) {
  const { data } = action;

  try {
    const response = yield fetch('https://enz0bi2bg7sak.x.pipedream.net', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    yield put(requestSignInSuccess(response.json()));
  } catch (err) {
    yield put(requestSignInFailed(err));
  }
}

function* requestSignInSaga() {
  yield takeLatest(REQUEST_SIGN_IN, signIn);
}

export default function* rootSaga() {
  yield all([
    requestSignInSaga(),
  ]);
}
