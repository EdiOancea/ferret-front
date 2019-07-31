import apiRequest from './apiRequest';

class UserService {
  async getLoggedUser() {
    return apiRequest.get('/logged-user');
  }

  async get(id) {
    return apiRequest.get(`/users/${id}`);
  }

  async signIn(data) {
    return apiRequest.post('/signin/', JSON.stringify(data));
  }
}

export default new UserService();
