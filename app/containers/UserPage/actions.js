import {
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER,
  SIGN_OUT,
} from './constants';

export const getUser = token => ({
  type: GET_USER,
  token,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const getUserFailure = () => ({
  type: GET_USER_FAILURE,
});
