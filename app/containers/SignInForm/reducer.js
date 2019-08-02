import { fromJS } from 'immutable';

import { EMPTY_SIGN_IN_ERROR_MESSAGE, SIGN_IN_FAILURE } from './constants';

const initialState = fromJS({
  errorMessage: '',
});

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPTY_SIGN_IN_ERROR_MESSAGE:
      return state.set('errorMessage', '');
    case SIGN_IN_FAILURE:
      return state.set('errorMessage', action.errorMessage);
    default:
      return state;
  }
};

export default signInReducer;
