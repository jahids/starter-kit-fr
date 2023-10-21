import axios from 'axios';

export const CustomInstance = axios.create({
  baseURL: `https://crud-backend-eh0e.onrender.com`,
});
