import { takeLatest, put } from 'redux-saga/effects';
import { GET_COMPANY } from '../constants';
import requestGetCompanySaga, { getCompany } from '../saga';
import { getCompanySuccess, getCompanyFailure } from '../actions';
import { company } from '../../../../tools/mockData';

jest.mock('services/getCompanyRequest');

describe('requestGetCompanySaga', () => {
  const getCompanyGenerator = requestGetCompanySaga();

  it('should start task to watch for GET_COMPANY action', () => {
    const takeLatestDescriptor = getCompanyGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GET_COMPANY, getCompany));
  });
});

describe('getCompanySaga', () => {
  it('should return an error message if it views a company unsuccessfully', () => {
    const getCompanyGenerator = getCompany({ id: '0' });
    expect(getCompanyGenerator.next().value).toEqual({ message: 'message' });
    expect(getCompanyGenerator.next({ message: 'message' }).value).toEqual(
      put(getCompanyFailure('message')),
    );
  });

  it('should return a company if it views a company successfully', () => {
    const getCompanyGenerator = getCompany({ id: '1' });
    expect(getCompanyGenerator.next().value).toEqual(company);
    expect(getCompanyGenerator.next(company).value).toEqual(
      put(getCompanySuccess(company)),
    );
  });
});
