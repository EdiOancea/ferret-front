import {
  GET_COMPANIES,
  GET_COMPANIES_SUCCESS,
  GET_COMPANIES_FAILURE,
} from './constants';

export const getCompanies = () => ({
  type: GET_COMPANIES,
});

export const getCompaniesSuccess = companies => ({
  type: GET_COMPANIES_SUCCESS,
  companies,
});

export const getCompaniesFailure = errorMessage => ({
  type: GET_COMPANIES_FAILURE,
  errorMessage,
});
