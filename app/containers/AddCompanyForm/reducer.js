import { fromJS } from 'immutable';

import { ADD_COMPANY_SUCCESS, ADD_COMPANY_FAILED } from './constants';

const initialState = fromJS({
  errorMessage: '',
});

const addCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY_SUCCESS:
      return state.set('errorMessage', '');
    case ADD_COMPANY_FAILED:
      return state.set('errorMessage', action.errorMessage);
    default:
      return state;
  }
};

export default addCompanyReducer;
