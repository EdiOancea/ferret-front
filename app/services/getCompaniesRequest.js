import apiRequest from './apiRequest';

const getCompaniesRequest = async () => apiRequest.get('/companies/');

export default getCompaniesRequest;
