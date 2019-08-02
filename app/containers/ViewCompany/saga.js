import { takeLatest, put, call } from 'redux-saga/effects';

import companyService from 'services/company';
import { handleApiErrors } from 'containers/App/actions';
import { GET_COMPANY } from './constants';
import { getCompanySuccess, getCompanyFailure } from './actions';

export function* getCompany(action) {
  const { id } = action;
  let response;
  try {
    response = yield call(companyService.get, id);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.id) {
    yield put(getCompanySuccess(response));
  } else {
    yield put(getCompanyFailure(response.message));
  }
}

export default function* requestGetCompanySaga() {
  yield takeLatest(GET_COMPANY, getCompany);
}
