import { takeLatest, put } from 'redux-saga/effects';
import companyService from 'services/company';
import { GET_COMPANY } from './constants';
import { getCompanySuccess, getCompanyFailure } from './actions';

export function* getCompany(action) {
  const { id } = action;
  const response = yield companyService.get(id);
  if (response.id) {
    yield put(getCompanySuccess(response));
  } else {
    yield put(getCompanyFailure(response.message));
  }
}

export default function* requestGetCompanySaga() {
  yield takeLatest(GET_COMPANY, getCompany);
}
