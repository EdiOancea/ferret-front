import { fromJS } from 'immutable';

import { STORE_USER_ID, SIGN_IN_FAILURE } from './constants';

const initialState = fromJS({
  errorMessage: '',
});

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USER_ID:
      return state.set('errorMessage', '');
    case SIGN_IN_FAILURE:
      return state.set('errorMessage', action.errorMessage);
    default:
      return state;
  }
};

export default signInReducer;
