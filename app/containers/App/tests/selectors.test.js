import { fromJS } from 'immutable';
import { makeSelectLocation, selectToken } from 'containers/App/selectors';

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const mockedState = fromJS({
      router: { location: { pathname: '/foo' } },
    });
    expect(locationStateSelector(mockedState)).toEqual(
      mockedState.getIn(['router', 'location']).toJS(),
    );
  });
});

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
