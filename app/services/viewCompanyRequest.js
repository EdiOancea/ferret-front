import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';

const viewCompanyRequest = async id => {
  const res = await fetch(`${API_URL}/companies/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json();
};

export default viewCompanyRequest;
