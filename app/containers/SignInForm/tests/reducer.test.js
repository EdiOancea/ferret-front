import { fromJS } from 'immutable';

import signInReducer from 'containers/SignInForm/reducer';
import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
} from 'containers/SignInForm/constants';

describe('signInReducer', () => {
  it('returns the initial state', () => {
    expect(signInReducer(undefined, {})).toEqual(
      fromJS({
        errorMessage: '',
      }),
    );
  });

  it('erases the error message', () => {
    expect(
      signInReducer(undefined, {
        type: SIGN_IN_SUCCESS,
        token: 'token',
      }).toJS(),
    ).toEqual({
      errorMessage: '',
    });
  });

  it('changes the error message', () => {
    expect(
      signInReducer(undefined, {
        type: SIGN_IN_FAILURE,
        errorMessage: 'oof',
      }).toJS(),
    ).toEqual({
      errorMessage: 'oof',
    });
  });
});
