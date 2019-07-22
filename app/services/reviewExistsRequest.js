import apiRequest from './apiRequest';

const reviewExistsRequest = async data => {
  const { companyId } = data;

  return apiRequest.get(`/companies/${companyId}/reviews/`);
};

export default reviewExistsRequest;
