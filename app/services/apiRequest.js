import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';
import parseJwt from './parseJwt';

const apiRequest = async ({ url, method, headers, body }) => {
  const res = await fetch(`${API_URL}${url}`, {
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
