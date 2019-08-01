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
  const { companyId } = action;
  const data = { companyId };
  const response = yield reviewExistsRequest(data);
  if (response.length > 0) {
    yield put(reviewExistsSuccess(response[0]));
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
