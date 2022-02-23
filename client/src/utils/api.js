import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  res => res,
  err => {
    if (err.response.status === 401) {
      // TODO: logout user
    }
    return Promise.reject(err);
  }
);

export default api;
