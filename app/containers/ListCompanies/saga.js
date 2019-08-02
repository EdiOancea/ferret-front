import { takeLatest, put, call } from 'redux-saga/effects';

import companyService from 'services/company';
import { handleApiErrors } from 'containers/App/actions';
import { GET_COMPANIES } from './constants';
import { getCompaniesSuccess, getCompaniesFailure } from './actions';

export function* getCompanies() {
  let response;
  try {
    response = yield call(companyService.getAll);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (!response.message) {
    yield put(getCompaniesSuccess(response));
  } else {
    yield put(getCompaniesFailure(response.message));
  }
}

export default function* requestGetCompaniesSaga() {
  yield takeLatest(GET_COMPANIES, getCompanies);
}
