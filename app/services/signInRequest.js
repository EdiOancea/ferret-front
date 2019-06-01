import apiRequest from './apiRequest';

const signInRequest = async data => (
  await apiRequest(
    'POST',
    '/signin',
    JSON.stringify(data)
  )
);

export default signInRequest;
