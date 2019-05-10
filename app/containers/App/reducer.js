import { fromJS } from 'immutable';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
} from 'containers/SignInForm/constants';
import { SIGN_OUT } from 'containers/App/constants';

const initialState = fromJS({
  token: '',
  loading: true,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.set('token', action.token);
    case SIGN_IN_FAILED:
      return state.set('token', '');
    case SIGN_OUT:
      return state.set('token', '');
    default:
      return state;
  }
};

export default appReducer;
