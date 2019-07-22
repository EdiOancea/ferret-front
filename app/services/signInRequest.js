import apiRequest from './apiRequest';

const signInRequest = async data =>
  apiRequest.post('/signin/', JSON.stringify(data));

export default signInRequest;
