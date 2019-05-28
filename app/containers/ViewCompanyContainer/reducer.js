import { fromJS } from 'immutable';

import { VIEW_COMPANY_SUCCESS, VIEW_COMPANY_FAILURE } from './constants';

const initialState = fromJS({
  company: {},
  errorMessage: '',
});

const viewCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEW_COMPANY_SUCCESS:
      return state.set('errorMessage', '').set('company', action.company);
    case VIEW_COMPANY_FAILURE:
      return state.set('errorMessage', action.errorMessage).set('company', {});
    default:
      return state;
  }
};

export default viewCompanyReducer;
