import {
  LOAD_TOKEN,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SIGN_OUT,
} from './constants';

export const loadToken = () => ({
  type: LOAD_TOKEN,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailure = () => ({
  type: GET_USER_FAILURE,
});
