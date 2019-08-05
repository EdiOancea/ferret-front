import { fromJS } from 'immutable';

import { GET_COMPANY_SUCCESS, GET_COMPANY_FAILURE } from './constants';

const initialState = fromJS({
  company: null,
  errorMessage: '',
});

const getCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COMPANY_SUCCESS:
      return state
        .set('errorMessage', '')
        .set('company', fromJS(action.company));
    case GET_COMPANY_FAILURE:
      return state
        .set('errorMessage', action.errorMessage)
        .set('company', null);
    default:
      return state;
  }
};

export default getCompanyReducer;
