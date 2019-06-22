import { takeLatest, put, all } from 'redux-saga/effects';
import addReviewRequest from 'services/addCompanyReviewRequest';
import reviewExistsRequest from 'services/reviewExistsRequest';
import { ADD_REVIEW, REVIEW_EXISTS } from './constants';
import {
  addReviewSuccess,
  addReviewFailure,
  reviewExistsSuccess,
  reviewExistsFailure,
} from './actions';

export function* addReview(action) {
  const { data } = action;
  const response = yield addReviewRequest(data);
  if (response.id) {
    yield put(addReviewSuccess(response));
  } else {
    yield put(addReviewFailure(response.message));
  }
}

export function* reviewExists(action) {
  const { userId, companyId } = action;
  const data = { userId, companyId };
  const response = yield reviewExistsRequest(data);
  if (response.id) {
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
