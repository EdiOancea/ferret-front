import { fromJS } from 'immutable';

import getCompanyReducer from 'containers/ViewCompany/reducer';
import {
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
} from 'containers/ViewCompany/constants';
import { company } from '../../../../tools/mockData';

describe('getCompanyReducer', () => {
  it('returns the initial state', () => {
    expect(getCompanyReducer(undefined, {})).toEqual(
      fromJS({
        company: null,
        errorMessage: '',
      }),
    );
  });

  it('adds the company and erases the error message', () => {
    expect(
      getCompanyReducer(undefined, {
        type: GET_COMPANY_SUCCESS,
        company,
      }).toJS(),
    ).toEqual({
      errorMessage: '',
      company,
    });
  });

  it('erases the company and changes the error message', () => {
    expect(
      getCompanyReducer(undefined, {
        type: GET_COMPANY_FAILURE,
        errorMessage: 'This is an error',
      }).toJS(),
    ).toEqual({
      errorMessage: 'This is an error',
      company: null,
    });
  });
});
