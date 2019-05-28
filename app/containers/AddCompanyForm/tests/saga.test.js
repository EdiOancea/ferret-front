import { takeLatest, put } from 'redux-saga/effects';
import { ADD_COMPANY } from '../constants';
import requestAddCompanySaga, { addCompany } from '../saga';
import { addCompanySuccess, addCompanyFailure } from '../actions';
import { company } from '../../../../tools/mockData';

jest.mock('services/addCompanyRequest');

describe('requestAddCompanySaga', () => {
  const addCompanyGenerator = requestAddCompanySaga();

  it('should start task to watch for ADD_COMPANY action', () => {
    const takeLatestDescriptor = addCompanyGenerator.next() /* .value */;
    expect(takeLatestDescriptor.value).toEqual(
      takeLatest(ADD_COMPANY, addCompany),
    );
  });
});

describe('addCompanySaga', () => {
  it('should return an error message if it adds a company unsuccessfully', () => {
    const addCompanyGenerator = addCompany({ data: 0 });
    expect(addCompanyGenerator.next().value).toEqual({ message: 'message' });
    expect(addCompanyGenerator.next({ message: 'message' }).value).toEqual(
      put(addCompanyFailure('message')),
    );
  });

  it('should return a company if it adds a company successfully', () => {
    const addCompanyGenerator = addCompany({ data: 1 });
    expect(addCompanyGenerator.next().value).toEqual(company);
    expect(addCompanyGenerator.next(company).value).toEqual(
      put(addCompanySuccess(company)),
    );
  });
});
