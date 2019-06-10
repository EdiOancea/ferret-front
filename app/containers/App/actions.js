import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from './constants';

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailed = user => ({
  type: GET_USER_FAILED,
  user,
});
