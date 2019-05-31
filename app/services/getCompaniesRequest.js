import 'isomorphic-fetch';
import { API_URL } from 'config';

const getCompanyRequest = async () => {
  const res = await fetch(`${API_URL}/companies/all`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  return res.json();
};

export default getCompanyRequest;
