import { takeLatest, put, call } from 'redux-saga/effects';

import companyService from 'services/company';
import { handleApiErrors } from 'containers/App/actions';
import { ADD_COMPANY } from './constants';
import { addCompanySuccess, addCompanyFailure } from './actions';

export function* addCompany(action) {
  const { data } = action;
  let response;
  try {
    response = yield call(companyService.create, data);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.id) {
    yield put(addCompanySuccess(response));
  } else {
    yield put(addCompanyFailure(response.message));
  }
}

export default function* requestAddCompanySaga() {
  yield takeLatest(ADD_COMPANY, addCompany);
}
