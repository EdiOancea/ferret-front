import { fromJS } from 'immutable';

import { SIGN_IN_FAILURE } from 'containers/SignInForm/constants';
import {
  STORE_TOKEN,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_LOGGED_USER_SUCCESS,
  GET_LOGGED_USER_FAILURE,
  SIGN_OUT,
} from './constants';

const initialState = fromJS({
  token: '',
  isLoading: false,
  loggedUser: {
    id: null,
    meta: null,
  },
});

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_TOKEN:
      return state.set('token', action.token || '');
    case SIGN_IN_FAILURE:
      return state.set('token', '');
    case SHOW_LOADER:
      return state.set('isLoading', true);
    case HIDE_LOADER:
      return state.set('isLoading', false);
    case GET_LOGGED_USER_SUCCESS: {
      const { id, ...userMeta } = action.user;

      return state
        .setIn(['loggedUser', 'id'], id)
        .setIn(['loggedUser', 'meta'], userMeta);
    }
    case GET_LOGGED_USER_FAILURE:
      return state
        .setIn(['loggedUser', 'id'], null)
        .setIn(['loggedUser', 'meta'], null);
    case SIGN_OUT:
      return state
        .set('token', '')
        .setIn(['loggedUser', 'id'], null)
        .setIn(['loggedUser', 'meta'], null);
    default:
      return state;
  }
};

export default appReducer;
