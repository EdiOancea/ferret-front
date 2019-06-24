import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';

const addReviewRequest = async data => {
  const res = await fetch(`${API_URL}/company-reviews`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return res.json();
};

export default addReviewRequest;
