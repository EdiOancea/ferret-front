import { takeLatest, put } from 'redux-saga/effects';
import addReviewRequest from 'services/addCompanyReviewRequest';
import { ADD_REVIEW } from './constants';
import { addReviewSuccess, addReviewFailure, setHasReviewed } from './actions';

export function* addReview(action) {
  const { data } = action;
  const response = yield addReviewRequest(data);
  if (response.id) {
    yield put(addReviewSuccess(response));
    yield put(setHasReviewed());
  } else {
    yield put(addReviewFailure(response.message));
  }
}

export default function* requestAddReviewSaga() {
  yield takeLatest(ADD_REVIEW, addReview);
}
