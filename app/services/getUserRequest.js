import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';
import parseJwt from './parseJwt';

const getUserRequest = async token => {
  const id = parseJwt(token).id;
  if (id !== undefined) {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return res.json();
  }

  return {};
};

export default getUserRequest;
