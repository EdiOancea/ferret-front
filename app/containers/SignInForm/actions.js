import ls from 'local-storage';

import parseJwt from 'services/parseJwt';
import { storeToken } from 'containers/App/actions';
import { SIGN_IN, STORE_USER_ID, SIGN_IN_FAILURE } from './constants';

export const signIn = data => ({
  type: SIGN_IN,
  data,
});

export const signInSuccess = token => {
  ls.set('token', token);

  return dispatch => {
    dispatch(storeToken(token));
    const { id } = parseJwt(token);
    dispatch(storeUserId(id));
  };
};

export const storeUserId = id => ({
  type: STORE_USER_ID,
  id,
});

export const signInFailure = errorMessage => ({
  type: SIGN_IN_FAILURE,
  errorMessage,
});
