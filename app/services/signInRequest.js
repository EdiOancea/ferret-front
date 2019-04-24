import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';

const signInRequest = async data => {
  const res = await fetch(`${API_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export default signInRequest;
