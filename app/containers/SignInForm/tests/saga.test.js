import { takeLatest, put } from 'redux-saga/effects';
import { SIGN_IN } from '../constants';
import requestSignInSaga, { signIn } from '../saga';
import { signInSuccess, signInFailed } from '../actions';

jest.mock('services/signInRequest');

describe('requestSignInSaga', () => {
  const signInGenerator = requestSignInSaga();

  it('should start task to watch for SIGN_IN action', () => {
    const takeLatestDescriptor = signInGenerator.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SIGN_IN, signIn));
  });
});

describe('signInSaga', () => {
  it('should return an error message if it signs in unsuccessfully', () => {
    const signInGenerator = signIn({ data: 0 });
    expect(signInGenerator.next().value).toEqual({ message: 'message' });
    expect(signInGenerator.next({ message: 'message' }).value).toEqual(
      put(signInFailed('message')),
    );
  });

  it('should return a token if it signs in successfully', () => {
    const signInGenerator = signIn({ data: 1 });
    expect(signInGenerator.next().value).toEqual({ token: 'token' });
    expect(signInGenerator.next({ token: 'token' }).value).toEqual(
      put(signInSuccess('token')),
    );
  });
});
