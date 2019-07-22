import fetch from 'isomorphic-fetch';
import ls from 'local-storage';

import { API_URL } from 'config';

class Api {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  get(path, params = {}, headers = {}) {
    return this.request('GET', path, params, headers);
  }

  post(path, body, params = {}, headers = {}) {
    return this.request('POST', path, params, headers, body);
  }

  put(path, body, params = {}, headers = {}) {
    return this.request('PUT', path, params, headers, body);
  }

  delete(path, params = {}, headers = {}) {
    return this.request('DELETE', path, params, headers);
  }

  async request(method, path, params = {}, headers = {}, body) {
    const token = ls.get('token');
    const reqHeaders = {
      Authorization: token ? `Bearer ${token}` : undefined,
    };
    if (headers['Content-Type'] === 'multipart/form-data') {
      const { 'Content-Type': contentType, ...headersNoContentType } = headers;
      Object.assign(reqHeaders, headersNoContentType);
    } else {
      reqHeaders['Content-Type'] = 'application/json';
      Object.assign(reqHeaders, headers);
    }

    const res = await fetch(`${this.apiUrl}${path}`, {
      method,
      headers: reqHeaders,
      body,
    });

    return res.json();
  }
}

export default new Api(API_URL);
