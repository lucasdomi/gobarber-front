import axios from 'axios';

const api = axios.create({
  baseURL: 'http://206.189.202.79',
});

export default api;
