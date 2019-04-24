import { fromJS } from 'immutable';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
} from 'containers/SignInForm/constants';

const initialState = fromJS({
  token: '',
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.set('token', action.token);
    case SIGN_IN_FAILED:
      return state.set('token', '');
    default:
      return state;
  }
};

export default appReducer;
