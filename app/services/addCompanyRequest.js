import fetch from 'isomorphic-fetch';
import { API_URL } from 'config';

const addCompanyRequest = async data => {
  const { images: fileList, ...bodyData } = data;
  const files = [...fileList];

  const formData = new FormData();
  files.forEach(file => formData.append('images', file, file.name));
  Object.keys(bodyData).forEach(key => formData.append(key, data[key]));

  const res = await fetch(`${API_URL}/companies`, {
    method: 'POST',
    body: formData,
  });

  return res.json();
};

export default addCompanyRequest;
