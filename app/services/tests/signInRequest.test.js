import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';
import signInRequest from '../signInRequest';

describe('signInRequest', () => {
  it('should return the correct data', async () => {
    const data = 'data';
    expect(await signInRequest({ data })).toEqual({ data });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/signin`, {
      body: JSON.stringify({ data: 'data' }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
  });
});
