import { fromJS } from 'immutable';

import { GET_COMPANIES_SUCCESS, GET_COMPANIES_FAILURE } from './constants';

const initialState = fromJS({
  companies: null,
  errorMessage: '',
});

const getCompaniesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANIES_SUCCESS:
      return state.set('errorMessage', '').set('companies', action.companies);
    case GET_COMPANIES_FAILURE:
      return state
        .set('errorMessage', action.errorMessage)
        .set('companies', null);
    default:
      return state;
  }
};

export default getCompaniesReducer;
