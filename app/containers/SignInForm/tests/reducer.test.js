import { fromJS } from 'immutable';

import signInReducer from '../reducer';
import { SIGN_IN_SUCCESS, SIGN_IN_FAILED } from '../constants';

describe('signInReducer', () => {
  it('returns the initial state', () => {
    expect(signInReducer(undefined, {})).toEqual(
      fromJS({
        token: '',
        errorMessage: '',
      }),
    );
  });

  it('changes the token', () => {
    expect(
      signInReducer(undefined, {
        type: SIGN_IN_SUCCESS,
        token: 'token',
      }).toJS(),
    ).toEqual({
      token: 'token',
      errorMessage: '',
    });
  });

  it('changes the error message', () => {
    expect(
      signInReducer(undefined, {
        type: SIGN_IN_FAILED,
        message: 'oof',
      }).toJS(),
    ).toEqual({
      token: '',
      errorMessage: 'oof',
    });
  });
});
