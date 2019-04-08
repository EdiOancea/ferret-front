import { fromJS } from 'immutable';

import {
  REQUEST_SIGN_IN_SUCCESS,
  REQUEST_SIGN_IN_FAILED,
} from './constants';

export const initialState = fromJS({
  token: "",
  message: "",
});

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SIGN_IN_SUCCESS:
      return state.set('token', action.token);
    case REQUEST_SIGN_IN_FAILED:
      return state.set('message', action.message);
    default:
      return state;
  }
};

export default signInReducer;
