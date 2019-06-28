import ls from 'local-storage';
import apiRequest from './apiRequest';
import parseJwt from './parseJwt';

const getUserRequest = async id => {
  const token = ls.get('token');
  const userId = id || parseJwt(token).id;

  return await apiRequest(
    'GET',
    `/users/${userId}`,
    {},
    { Authorization: `Bearer ${token}` },
  );
};

export default getUserRequest;
