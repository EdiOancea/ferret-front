import { fromJS } from 'immutable';

import { ADD_COMPANY_SUCCESS, ADD_COMPANY_FAILURE } from './constants';

const initialState = fromJS({
  errorMessage: '',
});

const addCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMPANY_SUCCESS:
      return state.set('errorMessage', '');
    case ADD_COMPANY_FAILURE:
      return state.set('errorMessage', action.errorMessage);
    default:
      return state;
  }
};

export default addCompanyReducer;
