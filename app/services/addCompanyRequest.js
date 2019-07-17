import apiRequest from './apiRequest';

const addCompanyRequest = async data => {
  const { images: fileList, ...bodyData } = data;
  const files = [...fileList];
  const formData = new FormData();
  files.forEach(file => formData.append('images', file, file.name));
  Object.keys(data).forEach(key => formData.append(key, data[key]));

  return apiRequest.post('/companies/', formData, undefined, {
    'Content-Type': 'multipart/form-data',
  });
};

export default addCompanyRequest;
