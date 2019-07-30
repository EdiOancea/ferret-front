import { takeLatest, put } from 'redux-saga/effects';
import companyService from 'services/company';
import { GET_COMPANIES } from './constants';
import { getCompaniesSuccess, getCompaniesFailure } from './actions';

export function* getCompanies() {
  const response = yield companyService.getAll();
  if (!response.message) {
    yield put(getCompaniesSuccess(response));
  } else {
    yield put(getCompaniesFailure(response.message));
  }
}

export default function* requestGetCompaniesSaga() {
  yield takeLatest(GET_COMPANIES, getCompanies);
}
