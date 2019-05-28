import {
  VIEW_COMPANY,
  VIEW_COMPANY_SUCCESS,
  VIEW_COMPANY_FAILURE,
} from '../constants';
import {
  viewCompany,
  viewCompanySuccess,
  viewCompanyFailure,
} from '../actions';
import { company } from '../../../../tools/mockData';

describe('view company actions', () => {
  it('returns viewCompany', () => {
    expect(viewCompany('')).toEqual({ type: VIEW_COMPANY, id: '' });
  });

  it('returns viewCompanySuccess', () => {
    expect(viewCompanySuccess(company)).toEqual({
      type: VIEW_COMPANY_SUCCESS,
      company,
    });
  });

  it('returns viewCompanyFailure', () => {
    expect(viewCompanyFailure('errorMessage')).toEqual({
      type: VIEW_COMPANY_FAILURE,
      errorMessage: 'errorMessage',
    });
  });
});
