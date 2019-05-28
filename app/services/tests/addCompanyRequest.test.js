import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';
import addCompanyRequest from '../addCompanyRequest';

describe('addCompanyRequest', () => {
  it('should return the correct data', async () => {
    const data = 'data';
    expect(await addCompanyRequest({ data })).toEqual({ data });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/companies`, {
      body: JSON.stringify({ data: 'data' }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });
  });
});
