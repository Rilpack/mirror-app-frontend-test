import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mirror-app-frontend-demo-server.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});
