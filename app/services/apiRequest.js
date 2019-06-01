import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';
import parseJwt from './parseJwt';

const apiRequest = async (method, url, body = {}, headers = {}) => {
  body = method === 'GET' ? undefined : body;

  const res = await fetch(
    `${API_URL}${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body,
  });

  return res.json();
};

export default apiRequest;
