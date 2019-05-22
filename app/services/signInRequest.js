import apiRequest from './apiRequest';

const signInRequest = async data => (
  await apiRequest({
    url: '/signin',
    method: 'POST',
    body: JSON.stringify(data),
  })
);

export default signInRequest;
