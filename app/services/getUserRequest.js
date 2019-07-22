import ls from 'local-storage';

import parseJwt from 'services/parseJwt';
import apiRequest from './apiRequest';

const getUserRequest = async id => apiRequest.get(`/users/${id}`);

export default getUserRequest;
