import { takeLatest, put } from 'redux-saga/effects';
import viewCompanyRequest from 'services/viewCompanyRequest';
import { VIEW_COMPANY } from './constants';
import { viewCompanySuccess, viewCompanyFailed } from './actions';

export function* viewCompany(action) {
  const { id } = action;
  const response = yield viewCompanyRequest(id);
  if (response.id) {
    yield put(viewCompanySuccess(response));
  } else {
    yield put(viewCompanyFailed(response.message));
  }
}

export default function* requestViewCompanySaga() {
  yield takeLatest(VIEW_COMPANY, viewCompany);
}
