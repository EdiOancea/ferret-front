import {
  SIGN_OUT,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
  GET_USER,
} from './constants';

export const signOut = () => ({
  type: SIGN_OUT,
});

export const getUser = token => ({
  type: GET_USER,
  token,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailed = () => ({
  type: GET_USER_FAILED,
});
