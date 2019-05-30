import {
  GET_COMPANY,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
} from './constants';

export const getCompany = id => ({
  type: GET_COMPANY,
  id,
});

export const getCompanySuccess = company => ({
  type: GET_COMPANY_SUCCESS,
  company,
});

export const getCompanyFailure = errorMessage => ({
  type: GET_COMPANY_FAILURE,
  errorMessage,
});
