import { fromJS } from 'immutable';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILED,
} from 'containers/SignInForm/constants';

import { IS_LOADING, IS_NOT_LOADING } from 'containers/App/constants';

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
    case IS_LOADING:
      return state.set('loading', true);
    case IS_NOT_LOADING:
      return state.set('loading', false);
    default:
      return state;
  }
};

export default appReducer;
