import apiRequest from './apiRequest';

const addReviewRequest = async data => {
  const { companyId, ...bodyData } = data;

  return apiRequest.post(
    `/companies/${companyId}/reviews`,
    JSON.stringify(bodyData),
  );
};

export default addReviewRequest;
