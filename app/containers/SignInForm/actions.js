import ls from 'local-storage';

import parseJwt from 'services/parseJwt';
import { storeToken, getLoggedUser } from 'containers/App/actions';
import {
  SIGN_IN,
  EMPTY_SIGN_IN_ERROR_MESSAGE,
  SIGN_IN_FAILURE,
} from './constants';

export const signIn = data => ({
  type: SIGN_IN,
  data,
});

export const signInSuccess = token => {
  ls.set('token', token);

  return dispatch => {
    const { id } = parseJwt(token);
    dispatch(emptySignInErrorMessage());
    dispatch(storeToken(token));
    dispatch(getLoggedUser(id));
  };
};

export const emptySignInErrorMessage = () => ({
  type: EMPTY_SIGN_IN_ERROR_MESSAGE,
});

export const signInFailure = errorMessage => ({
  type: SIGN_IN_FAILURE,
  errorMessage,
});
