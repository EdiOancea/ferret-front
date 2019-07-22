import apiRequest from './apiRequest';

const getCompanyRequest = async id => apiRequest.get(`/companies/${id}`);

export default getCompanyRequest;
