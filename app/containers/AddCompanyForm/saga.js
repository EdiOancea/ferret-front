import { takeLatest, put } from 'redux-saga/effects';
import companyService from 'services/company';
import { ADD_COMPANY } from './constants';
import { addCompanySuccess, addCompanyFailure } from './actions';

export function* addCompany(action) {
  const { data } = action;
  const response = yield companyService.create(data);
  if (response.id) {
    yield put(addCompanySuccess(response));
  } else {
    yield put(addCompanyFailure(response.message));
  }
}

export default function* requestAddCompanySaga() {
  yield takeLatest(ADD_COMPANY, addCompany);
}
