import ls from 'local-storage';

import parseJwt from 'services/parseJwt';
import {
  STORE_TOKEN,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_LOGGED_USER,
  GET_LOGGED_USER_SUCCESS,
  GET_LOGGED_USER_FAILURE,
  SIGN_OUT,
} from './constants';

export const handleApiErrors = status => dispatch => {
  if (status === 401) {
    dispatch(signOut());
  }
};

export const getToken = () => {
  const token = ls.get('token');

  return dispatch => {
    dispatch(storeToken(token));
    if (token !== null) {
      dispatch(getLoggedUser());
    }
  };
};

export const storeToken = token => ({
  type: STORE_TOKEN,
  token,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const signOut = () => {
  ls.remove('token');

  return {
    type: SIGN_OUT,
  };
};

export const getLoggedUser = () => ({
  type: GET_LOGGED_USER,
});

export const getLoggedUserSuccess = user => ({
  type: GET_LOGGED_USER_SUCCESS,
  user,
});

export const getLoggedUserFailure = () => ({
  type: GET_LOGGED_USER_FAILURE,
});
