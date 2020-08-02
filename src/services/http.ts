import axios from 'axios';

const baseURL = 'https://demo0518982.mockable.io/';

const api = axios.create({
  baseURL,
});

export const generateToken = () =>
  api.request({
    url: 'GenerateToken',
    method: 'GET',
  });
