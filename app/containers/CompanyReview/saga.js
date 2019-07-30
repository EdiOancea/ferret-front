import { takeLatest, put, all } from 'redux-saga/effects';
import companyService from 'services/company';
import { ADD_REVIEW, REVIEW_EXISTS } from './constants';
import {
  addReviewSuccess,
  addReviewFailure,
  reviewExistsSuccess,
  reviewExistsFailure,
} from './actions';

export function* addReview(action) {
  const { data } = action;
  const response = yield companyService.addReview(data);
  if (response.id) {
    yield put(addReviewSuccess(response));
  } else {
    yield put(addReviewFailure(response.message));
  }
}

export function* reviewExists(action) {
  const { companyId } = action;
  const data = { companyId };
  const response = yield companyService.getAllReviews(data);
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
