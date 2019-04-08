import {
  REQUEST_SIGN_IN,
  REQUEST_SIGN_IN_SUCCESS,
  REQUEST_SIGN_IN_FAILED,
} from './constants';

const requestSignIn = data => {
  return {
    type: REQUEST_SIGN_IN,
    data,
  };
};

const requestSignInSuccess = token => {
  return {
    type: REQUEST_SIGN_IN_SUCCESS,
    token,
  };
};

const requestSignInFailed = message => {
  return {
    type: REQUEST_SIGN_IN_FAILED,
    message,
  };
};

export {
  requestSignIn,
  requestSignInSuccess,
  requestSignInFailed,
}
