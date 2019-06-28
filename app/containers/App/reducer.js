import ls from 'local-storage';
import { fromJS } from 'immutable';
import parseJwt from 'services/parseJwt';
import { omit } from 'lodash';
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from 'containers/SignInForm/constants';
import {
  LOAD_TOKEN,
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
    case LOAD_TOKEN:
      const lsToken = ls.get('token');

      return state.set('token', lsToken || '');
    case SIGN_IN_SUCCESS:
      const { token } = action;
      ls.set('token', token);

      return state
        .set('token', token)
        .setIn(['loggedUser', 'id'], parseJwt(token).id);
    case SIGN_IN_FAILURE:
      return state.set('token', '');
    case SHOW_LOADER:
      return state.set('isLoading', true);
    case HIDE_LOADER:
      return state.set('isLoading', false);
    case SIGN_OUT:
      ls.remove('token');

      return state
        .set('token', '')
        .setIn(['loggedUser', 'id'], null)
        .setIn(['loggedUser', 'meta'], null);
    case SIGN_IN_FAILURE:
      return state.set('token', '');
    case GET_USER_SUCCESS:
      const userMeta = omit(action.user, 'id');

      return state.setIn(['loggedUser', 'meta'], userMeta);
    case GET_USER_FAILURE:
      return state;
    default:
      return state;
  }
};

export default appReducer;
