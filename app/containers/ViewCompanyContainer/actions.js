import {
  VIEW_COMPANY,
  VIEW_COMPANY_SUCCESS,
  VIEW_COMPANY_FAILURE,
} from './constants';

export const viewCompany = id => ({
  type: VIEW_COMPANY,
  id,
});

export const viewCompanySuccess = company => ({
  type: VIEW_COMPANY_SUCCESS,
  company,
});

export const viewCompanyFailure = errorMessage => ({
  type: VIEW_COMPANY_FAILURE,
  errorMessage,
});
