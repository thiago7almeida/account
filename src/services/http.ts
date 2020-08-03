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

export const sendMoneyToContact = (
  ClienteId: number,
  token: string | null,
  valor: string,
) =>
  api.request({
    url: `SendMoney`,
    method: 'POST',
    data: {
      ClienteId,
      token,
      valor,
    },
  });

export const getAllTransfers = (token: string | null) =>
  api.request({
    url: `SendMoney?token=${token}`,
    method: 'GET',
  });
