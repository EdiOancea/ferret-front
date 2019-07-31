import { takeLatest, put, call, all } from 'redux-saga/effects';

import companyService from 'services/company';
import { handleApiErrors } from 'containers/App/actions';
import { ADD_REVIEW, REVIEW_EXISTS } from './constants';
import {
  addReviewSuccess,
  addReviewFailure,
  reviewExistsSuccess,
  reviewExistsFailure,
} from './actions';

export function* addReview(action) {
  const { data } = action;
  let response;
  try {
    response = yield call(companyService.addReview, data);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.id) {
    yield put(addReviewSuccess(response));
  } else {
    yield put(addReviewFailure(response.message));
  }
}

export function* reviewExists(action) {
  const { companyId } = action;
  const data = { companyId };
  let response;
  try {
    response = yield call(companyService.getAllReviews, data);
  } catch (error) {
    yield put(handleApiErrors(error.status));
    return;
  }

  if (response.length > 0) {
    yield put(reviewExistsSuccess(response));
  } else {
    yield put(reviewExistsFailure());
  }
}

export default function* requestCompanyReviewSaga() {
  yield all([
    takeLatest(REVIEW_EXISTS, reviewExists),
    takeLatest(ADD_REVIEW, addReview),
  ]);
}
