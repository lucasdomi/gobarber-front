import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarberweb.website',
});

export default api;
