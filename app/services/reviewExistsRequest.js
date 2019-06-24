import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';

const reviewExistsRequest = async data => {
  const { userId, companyId } = data;
  const res = await fetch(
    `${API_URL}/company-reviews?userId=${userId}&companyId=${companyId}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    },
  );

  return res.json();
};

export default reviewExistsRequest;
