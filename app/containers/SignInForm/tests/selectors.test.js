import { fromJS } from 'immutable';

import { selectErrorMessage, selectSignIn } from '../selectors';

describe('selectSignIn', () => {
  it('should select the sign in state', () => {
    const signInState = fromJS({});
    const mockedState = fromJS({
      signIn: signInState,
    });
    expect(selectSignIn(mockedState)).toEqual(signInState);
  });
});

describe('selectErrorMessage', () => {
  it('should select the error message', () => {
    const errorMessage = 'error message';
    const mockedState = fromJS({
      signIn: {
        token: 'token',
        errorMessage: 'error message',
      },
    });
    expect(selectErrorMessage(mockedState)).toEqual(errorMessage);
  });
});
