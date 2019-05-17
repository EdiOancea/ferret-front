import { fromJS } from 'immutable';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from 'containers/SignInForm/constants';

import { SHOW_LOADER, HIDE_LOADER, SIGN_OUT } from './constants';

const initialState = fromJS({
  token: '',
  isLoading: false,
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.set('token', action.token);
    case SIGN_IN_FAILURE:
      return state.set('token', '');
    case SHOW_LOADER:
      return state.set('isLoading', true);
    case HIDE_LOADER:
      return state.set('isLoading', false);
    case SIGN_OUT:
      return state.set('token', '');
    default:
      return state;
  }
};

export default appReducer;
