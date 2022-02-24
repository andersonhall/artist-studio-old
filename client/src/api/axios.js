import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      // TODO: logout user
      console.log('logged out due to 401');
    }
    return Promise.reject(err);
  }
);

export default api;
