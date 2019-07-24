import ls from 'local-storage';

import parseJwt from 'services/parseJwt';
import { storeUserId } from 'containers/SignInForm/actions';
import {
  STORE_TOKEN,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SIGN_OUT,
} from './constants';

export const getToken = () => {
  const token = ls.get('token');

  return dispatch => {
    dispatch(storeToken(token));
    if (token !== null) {
      const { id } = parseJwt(token);
      dispatch(storeUserId(id));
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

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailure = () => ({
  type: GET_USER_FAILURE,
});
