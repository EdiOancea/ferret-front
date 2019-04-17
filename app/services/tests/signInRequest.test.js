import fetch from 'isomorphic-fetch';
import signInRequest from '../signInRequest';

describe('signInRequest', () => {
  it('should return the correct data', async () => {
    const data = 'data';
    const reqData = 'reqData';
    fetch.setValue({ data });
    expect(await signInRequest({ reqData })).toEqual({ data });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('http://localhost:3001/api/signin', {
      body: JSON.stringify({ reqData: 'reqData' }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
  });
});
