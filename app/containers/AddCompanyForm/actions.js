import {
  ADD_COMPANY,
  ADD_COMPANY_SUCCESS,
  ADD_COMPANY_FAILED,
} from './constants';

export const addCompany = data => ({
  type: ADD_COMPANY,
  data,
});

export const addCompanySuccess = company => ({
  type: ADD_COMPANY_SUCCESS,
  company,
});

export const addCompanyFailed = errorMessage => ({
  type: ADD_COMPANY_FAILED,
  errorMessage,
});
