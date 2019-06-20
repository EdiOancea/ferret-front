import apiRequest from './apiRequest';
import parseJwt from './parseJwt';
import ls from 'local-storage';

const getUserRequest = async id => {
  const token = ls.get('token');

  return (
    await apiRequest(
      'GET',
      `/users/${id}`,
      {},
      { Authorization: `Bearer ${token}` },
    )
  );
};


export default getUserRequest;
