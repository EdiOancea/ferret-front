import apiRequest from './apiRequest';

const signInRequest = async data => (
  await apiRequest({
    url: '/signin',
    method: 'Post',
    body: JSON.stringify(data),
  })
);

export default signInRequest;
