import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './constants';

export const signIn = data => ({
  type: SIGN_IN,
  data,
});

export const signInSuccess = token => ({
  type: SIGN_IN_SUCCESS,
  token,
});

export const signInFailed = errorMessage => ({
  type: SIGN_IN_FAILED,
  errorMessage,
});
