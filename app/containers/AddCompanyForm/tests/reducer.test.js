import { fromJS } from 'immutable';

import addCompanyReducer from 'containers/AddCompanyForm/reducer';
import {
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAILURE,
} from 'containers/AddCompanyForm/constants';
import { company } from '../../../../tools/mockData';

describe('addCompanyReducer', () => {
  it('returns the initial state', () => {
    expect(addCompanyReducer(undefined, {})).toEqual(
      fromJS({
        errorMessage: '',
      }),
    );
  });

  it('erases the error message', () => {
    expect(
      addCompanyReducer(undefined, {
        type: ADD_COMPANY_SUCCESS,
        company,
      }).toJS(),
    ).toEqual({
      errorMessage: '',
    });
  });

  it('changes the error message', () => {
    expect(
      addCompanyReducer(undefined, {
        type: ADD_COMPANY_FAILURE,
        errorMessage: 'This is an error',
      }).toJS(),
    ).toEqual({
      errorMessage: 'This is an error',
    });
  });
});
