import axios from 'axios';

const baseURL = 'https://demo0518982.mockable.io/';

const api = axios.create({
  baseURL,
});

export const generateToken = (name: string, email: string) =>
  api.request({
    url: `GenerateToken?nome=${name}&email=${email}`,
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
    url: `GetTransfers?token=${token}`,
    method: 'GET',
  });
