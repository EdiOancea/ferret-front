import { takeLatest, put } from 'redux-saga/effects';
import addCompanyRequest from 'services/addCompanyRequest';
import { ADD_COMPANY } from './constants';
import { addCompanySuccess, addCompanyFailure } from './actions';

export function* addCompany(action) {
  const { data } = action;
  const response = yield addCompanyRequest(data);
  if (response.id) {
    yield put(addCompanySuccess(response));
  } else {
    yield put(addCompanyFailure(response.message));
  }
}

export default function* requestAddCompanySaga() {
  yield takeLatest(ADD_COMPANY, addCompany);
}
