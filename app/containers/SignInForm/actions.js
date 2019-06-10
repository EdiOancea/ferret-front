import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from './constants';

export const signIn = data => ({
  type: SIGN_IN,
  data,
});

export const signInSuccess = token => ({
  type: SIGN_IN_SUCCESS,
  token,
});

export const signInFailure = errorMessage => ({
  type: SIGN_IN_FAILURE,
  errorMessage,
});
