import { takeLatest, put } from 'redux-saga/effects';
import getCompaniesRequest from 'services/getCompaniesRequest';
import { GET_COMPANIES } from './constants';
import { getCompaniesSuccess, getCompaniesFailure } from './actions';

export function* getCompanies() {
  const response = yield getCompaniesRequest();
  if (!response.message) {
    yield put(getCompaniesSuccess(response));
  } else {
    yield put(getCompaniesFailure(response.message));
  }
}

export default function* requestGetCompaniesSaga() {
  yield takeLatest(GET_COMPANIES, getCompanies);
}
