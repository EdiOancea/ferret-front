import {
  VIEW_COMPANY,
  VIEW_COMPANY_SUCCESS,
  VIEW_COMPANY_FAILED,
} from './constants';

export const viewCompany = id => ({
  type: VIEW_COMPANY,
  id,
});

export const viewCompanySuccess = company => ({
  type: VIEW_COMPANY_SUCCESS,
  company,
});

export const viewCompanyFailed = errorMessage => ({
  type: VIEW_COMPANY_FAILED,
  errorMessage,
});
