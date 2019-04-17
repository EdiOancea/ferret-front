import { fromJS } from 'immutable';

import { SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './constants';

const initialState = fromJS({
  token: '',
  errorMessage: '',
});

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.set('token', action.token).set('errorMessage', '');
    case SIGN_IN_FAILED:
      return state.set('errorMessage', action.message).set('token', '');
    default:
      return state;
  }
};

export default signInReducer;
