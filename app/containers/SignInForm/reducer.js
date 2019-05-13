import { fromJS } from 'immutable';

import { SIGN_IN_SUCCESS, SIGN_IN_FAILED } from './constants';

const initialState = fromJS({
  errorMessage: '',
});

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return state.set('errorMessage', '');
    case SIGN_IN_FAILED:
      return state.set('errorMessage', action.errorMessage);
    default:
      return state;
  }
};

export default signInReducer;
