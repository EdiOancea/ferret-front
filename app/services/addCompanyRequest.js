import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';

const addCompanyRequest = async data => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));
  const res = await fetch(`${API_URL}/companies`, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  return res.json();
};

export default addCompanyRequest;
