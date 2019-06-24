import apiRequest from './apiRequest';

const addCompanyRequest = async data => {
  const formData = new FormData();
  Object.keys(data).forEach(key => formData.append(key, data[key]));

  return apiRequest.post('/companies/', formData, undefined, {
    'Content-Type': 'multipart/form-data',
  });
};

export default addCompanyRequest;
