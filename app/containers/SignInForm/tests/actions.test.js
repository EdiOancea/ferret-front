import { SIGN_IN, SIGN_IN_SUCCESS, SIGN_IN_FAILURE } from '../constants';
import { signIn, signInSuccess, signInFailure } from '../actions';

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

  it('returns signInFailure', () => {
    expect(signInFailure('errorMessage')).toEqual({
      type: SIGN_IN_FAILURE,
      errorMessage: 'errorMessage',
    });
  });
});
