import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILED } from '../constants';
import { signIn, signInSuccess, signInFailed } from '../actions';

describe('sign in actions', () => {
  it('returns signIn', () => {
    expect(signIn({})).toEqual({ type: SIGN_IN, data: {} });
  });

  it('returns signInSuccess', () => {
    expect(signInSuccess('token')).toEqual({
      type: SIGN_IN_SUCCESS,
      token: 'token',
    });
  });

  it('returns signInFailed', () => {
    expect(signInFailed('errorMessage')).toEqual({
      type: SIGN_IN_FAILED,
      errorMessage: 'errorMessage',
    });
  });
});
