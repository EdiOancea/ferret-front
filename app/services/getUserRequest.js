import apiRequest from './apiRequest';
import parseJwt from './parseJwt';

const getUserRequest = async token => {
  const id = parseJwt(token).id;
  if (id !== undefined) {
    return await apiRequest({
      url: `/users/${id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return {};
};

export default getUserRequest;
