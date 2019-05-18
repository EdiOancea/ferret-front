import {
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAILED,
} from '../constants';
import { addCompany, addCompanySuccess, addCompanyFailed } from '../actions';
import { company } from '../../../../tools/mockData';

describe('add company actions', () => {
  it('returns addCompany', () => {
    expect(addCompany(company)).toEqual({ type: ADD_COMPANY, data: company });
  });

  it('returns addCompanySuccess', () => {
    expect(addCompanySuccess(company)).toEqual({
      type: ADD_COMPANY_SUCCESS,
      company,
    });
  });

  it('returns addCompanyFailed', () => {
    expect(addCompanyFailed('errorMessage')).toEqual({
      type: ADD_COMPANY_FAILED,
      errorMessage: 'errorMessage',
    });
  });
});
