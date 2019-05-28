import { fromJS } from 'immutable';

import viewCompanyReducer from 'containers/ViewCompanyContainer/reducer';
import {
  VIEW_COMPANY_SUCCESS,
  VIEW_COMPANY_FAILURE,
} from 'containers/ViewCompanyContainer/constants';
import { company } from '../../../../tools/mockData';

describe('viewCompanyReducer', () => {
  it('returns the initial state', () => {
    expect(viewCompanyReducer(undefined, {})).toEqual(
      fromJS({
        company: {},
        errorMessage: '',
      }),
    );
  });

  it('adds the company and erases the error message', () => {
    expect(
      viewCompanyReducer(undefined, {
        type: VIEW_COMPANY_SUCCESS,
        company,
      }).toJS(),
    ).toEqual({
      errorMessage: '',
      company,
    });
  });

  it('erases the company and changes the error message', () => {
    expect(
      viewCompanyReducer(undefined, {
        type: VIEW_COMPANY_FAILURE,
        errorMessage: 'This is an error',
      }).toJS(),
    ).toEqual({
      errorMessage: 'This is an error',
      company: {},
    });
  });
});
