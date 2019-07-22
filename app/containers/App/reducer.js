import { fromJS } from 'immutable';
import { omit } from 'lodash';
import {
  STORE_USER_ID,
  SIGN_IN_FAILURE,
} from 'containers/SignInForm/constants';
import {
  STORE_TOKEN,
  SHOW_LOADER,
  HIDE_LOADER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
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
    case STORE_USER_ID:
      return state.setIn(['loggedUser', 'id'], action.id);
    case SIGN_IN_FAILURE:
      return state.set('token', '');
    case SHOW_LOADER:
      return state.set('isLoading', true);
    case HIDE_LOADER:
      return state.set('isLoading', false);
    case SIGN_OUT:
      return state
        .set('token', '')
        .setIn(['loggedUser', 'id'], null)
        .setIn(['loggedUser', 'meta'], null);
    case GET_USER_SUCCESS: {
      const userMeta = omit(action.user, 'id');

      return state.setIn(['loggedUser', 'meta'], userMeta);
    }
    case GET_USER_FAILURE:
      return state;
    default:
      return state;
  }
};

export default appReducer;
