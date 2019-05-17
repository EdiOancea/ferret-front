import { fromJS } from 'immutable';

import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from './constants';

const initialState = fromJS({
  name: '',
});

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      const { firstName, lastName } = action.user;

      return state
        .set('name', `${firstName} ${lastName}`);
    case GET_USER_FAILURE:
      return state.set('name', '');
    default:
      return state;
  }
};

export default userReducer;
