import { fromJS } from 'immutable';
import { selectToken } from 'containers/App/selectors';

describe('selectToken', () => {
  const tokenSelector = selectToken();
  it('should select the token', () => {
    const mockedState = fromJS({
      app: { token: 'token' },
    });
    expect(tokenSelector(mockedState)).toEqual(
      mockedState.getIn(['app', 'token']),
    );
  });
});
