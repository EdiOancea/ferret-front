import {
  GET_COMPANY,
  GET_COMPANY_SUCCESS,
  GET_COMPANY_FAILURE,
} from './constants';

export const getCompany = id => ({
  type: GET_COMPANY,
  id,
});

export const getCompanySuccess = fetchedCompany => {
  const { address, ...company } = fetchedCompany;
  company.address = `${address.streetName} ${address.streetNumber}, ap. ${
    address.apartmentNumber
  }, ${address.city}, ${address.country}`;

  return {
    type: GET_COMPANY_SUCCESS,
    company,
  };
};

export const getCompanyFailure = errorMessage => ({
  type: GET_COMPANY_FAILURE,
  errorMessage,
});
