import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';

const addCompanyRequest = async data => {
  const formData = new FormData();
  formData.append('name', data.name);
  formData.append('address', data.address);
  formData.append('business', data.business);
  formData.append('images', data.images);
  const res = await fetch(`${API_URL}/companies`, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: formData,
  });

  return res.json();
};

export default addCompanyRequest;
