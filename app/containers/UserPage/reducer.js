import { fromJS } from 'immutable';

import { GET_USER_SUCCESS, GET_USER_FAILED, SIGN_OUT } from './constants';

const initialState = fromJS({
  name: '',
  loading: true,
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      const { firstName, lastName } = action.user;
      return state
        .set('name', `${firstName} ${lastName}`)
        .set('loading', false);
    case GET_USER_FAILED:
      return state.set('name', '').set('loading', false);
    case SIGN_OUT:
      return state.set('name', '').set('loading', false);
    default:
      return state;
  }
};

export default userReducer;
