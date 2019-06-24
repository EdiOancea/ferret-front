import fetch from 'isomorphic-fetch';
import ls from 'local-storage';

import { API_URL } from 'config';

class Api {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  get(path, params = {}, headers = {}) {
    return this.request('GET', params, headers);
  }

  post(path, body, params = {}, headers = {}) {
    return this.request('POST', params, headers, body);
  }

  put(path, body, params = {}, headers = {}) {
    return this.request('PUT', params, headers, body);
  }

  delete(path, params = {}, headers) {
    return this.request('DELETE', params, headers);
  }

  async request(method, path, params = {}, headers = {}, body = {}) {
    const token = ls.get('token');

    const res = await fetch(`${this.apiUrl}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : undefined,
        ...headers,
      },
      body,
    });

    return res.json();
  }
}

export default new Api(API_URL);
