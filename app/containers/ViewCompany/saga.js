import { takeLatest, put } from 'redux-saga/effects';
import getCompanyRequest from 'services/getCompanyRequest';
import { GET_COMPANY } from './constants';
import { getCompanySuccess, getCompanyFailure } from './actions';

export function* getCompany(action) {
  const { id } = action;
  const response = yield getCompanyRequest(id);
  if (response.id) {
    yield put(getCompanySuccess(response));
  } else {
    yield put(getCompanyFailure(response.message));
  }
}

export default function* requestGetCompanySaga() {
  yield takeLatest(GET_COMPANY, getCompany);
}
