import { fromJS } from 'immutable';
import parseJwt from 'services/parseJwt';
import { omit } from 'lodash';
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from 'containers/SignInForm/constants';
import {
  SHOW_LOADER,
  HIDE_LOADER,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
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
    case SIGN_IN_SUCCESS:
      const { token } = action;

      return state
        .set('token', action.token)
        .setIn(['loggedUser', 'id'], parseJwt(token).id);
    case SIGN_IN_FAILURE:
      return state.set('token', '');
    case GET_USER_SUCCESS:
      const userMeta = omit(action.user, 'id');

      return state.setIn(['loggedUser', 'meta'], userMeta);
    case GET_USER_FAILED:
      return state;
    case SHOW_LOADER:
      return state.set('isLoading', true);
    case HIDE_LOADER:
      return state.set('isLoading', false);
    default:
      return state;
  }
};

export default appReducer;
