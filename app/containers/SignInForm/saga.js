import { takeLatest, put, call } from 'redux-saga/effects';

import userService from 'services/user';
import { handleApiErrors } from 'containers/App/actions';
import { SIGN_IN } from './constants';
import { signInSuccess, signInFailure } from './actions';

export function* signIn(action) {
  const { data } = action;
  let response;
  try {
    response = yield call(userService.signIn, data);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.token !== undefined) {
    yield put(signInSuccess(response.token));
  } else {
    yield put(signInFailure(response.message));
  }
}

export default function* requestSignInSaga() {
  yield takeLatest(SIGN_IN, signIn);
}
