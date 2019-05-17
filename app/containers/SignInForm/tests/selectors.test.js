import { fromJS } from 'immutable';

import { selectErrorMessage, selectSignInDomain } from '../selectors';

describe('selectSignInDomain', () => {
  it('should select the sign in state', () => {
    const signInState = fromJS({});
    const mockedState = fromJS({
      signIn: signInState,
    });
    expect(selectSignInDomain(mockedState)).toEqual(signInState);
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
