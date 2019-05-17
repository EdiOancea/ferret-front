import { fromJS } from 'immutable';

import {
  SIGN_IN_SUCCESS,
  SIGN_IN_Failure,
} from 'containers/SignInForm/constants';
import appReducer from '../reducer';

describe('appReducer', () => {
  it('returns the initial state', () => {
    expect(appReducer(undefined, {})).toEqual(fromJS({ token: '' }));
  });

  it('erases the token', () => {
    expect(
      appReducer(undefined, {
        type: SIGN_IN_FAILURE,
        message: 'oof',
      }).toJS(),
    ).toEqual({ token: '' });
  });

  it('changes the token', () => {
    expect(
      appReducer(undefined, {
        type: SIGN_IN_SUCCESS,
        token: 'token',
      }).toJS(),
    ).toEqual({ token: 'token' });
  });
});
