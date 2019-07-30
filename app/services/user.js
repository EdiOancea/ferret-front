import apiRequest from './apiRequest';

class UserService {
  async get(id) {
    return apiRequest.get(`/users/${id}`);
  }

  async signIn(data) {
    return apiRequest.post('/signin/', JSON.stringify(data));
  }
}

export default new UserService();
