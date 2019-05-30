import { API_URL } from 'config';
import getCompanyRequest from '../getCompanyRequest';
import { company } from '../../../tools/mockData';
global.fetch = require('jest-fetch-mock');

describe('getCompanyRequest', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should return the correct data', async () => {
    fetch.mockResponseOnce(JSON.stringify(company));
    const id = '1';
    expect(await getCompanyRequest(id)).toEqual(company);
    expect(fetch.mock.calls.length).toEqual(1);
    expect(fetch).toHaveBeenCalledWith(`${API_URL}/companies/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
  });
});
