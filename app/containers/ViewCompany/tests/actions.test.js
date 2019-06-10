import {
  GET_COMPANY,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
} from '../constants';
import { getCompany, getCompanySuccess, getCompanyFailure } from '../actions';
import { company } from '../../../../tools/mockData';

describe('view company actions', () => {
  it('returns getCompany', () => {
    expect(getCompany('')).toEqual({ type: GET_COMPANY, id: '' });
  });

  it('returns getCompanySuccess', () => {
    expect(getCompanySuccess(company)).toEqual({
      type: GET_COMPANY_SUCCESS,
      company,
    });
  });

  it('returns getCompanyFailure', () => {
    expect(getCompanyFailure('errorMessage')).toEqual({
      type: GET_COMPANY_FAILURE,
      errorMessage: 'errorMessage',
    });
  });
});
