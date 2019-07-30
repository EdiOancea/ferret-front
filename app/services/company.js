import apiRequest from './apiRequest';

class CompanyService {
  async create(data) {
    const { images: fileList, ...bodyData } = data;
    const files = [...fileList];
    const formData = new FormData();
    files.forEach(file => formData.append('images', file, file.name));
    Object.keys(bodyData).forEach(key => formData.append(key, bodyData[key]));

    return apiRequest.post('/companies/', formData, undefined, {
      'Content-Type': 'multipart/form-data',
    });
  }

  async get(id) {
    return apiRequest.get(`/companies/${id}`);
  }

  async getAll() {
    return apiRequest.get('/companies/');
  }

  async addReview(data) {
    const { companyId, ...bodyData } = data;

    return apiRequest.post(
      `/companies/${companyId}/reviews`,
      JSON.stringify(bodyData),
    );
  }

  async getAllReviews(data) {
    const { companyId } = data;

    return apiRequest.get(`/companies/${companyId}/reviews/`);
  }
}

export default new CompanyService();
