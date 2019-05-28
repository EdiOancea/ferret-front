import { takeLatest, put } from 'redux-saga/effects';
import { VIEW_COMPANY } from '../constants';
import requestViewCompanySaga, { viewCompany } from '../saga';
import { viewCompanySuccess, viewCompanyFailure } from '../actions';
import { company } from '../../../../tools/mockData';

jest.mock('services/viewCompanyRequest');

describe('requestViewCompanySaga', () => {
  const viewCompanyGenerator = requestViewCompanySaga();

  it('should start task to watch for VIEW_COMPANY action', () => {
    const takeLatestDescriptor = viewCompanyGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(VIEW_COMPANY, viewCompany));
  });
});

describe('viewCompanySaga', () => {
  it('should return an error message if it views a company unsuccessfully', () => {
    const viewCompanyGenerator = viewCompany({ id: '0' });
    expect(viewCompanyGenerator.next().value).toEqual({ message: 'message' });
    expect(viewCompanyGenerator.next({ message: 'message' }).value).toEqual(
      put(viewCompanyFailure('message')),
    );
  });

  it('should return a company if it views a company successfully', () => {
    const viewCompanyGenerator = viewCompany({ id: '1' });
    expect(viewCompanyGenerator.next().value).toEqual(company);
    expect(viewCompanyGenerator.next(company).value).toEqual(
      put(viewCompanySuccess(company)),
    );
  });
});
