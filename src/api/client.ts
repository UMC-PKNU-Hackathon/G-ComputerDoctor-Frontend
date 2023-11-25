import axios from 'axios';

const client = axios.create({
  baseURL: 'https://port-0-server-5mk12alpcf008f.sel5.cloudtype.app',
});

export const singup = async (params: { email: string; password: string }) => {
  const { data } = await client.post('/users/signup', params);
  return data;
};

export const login = async (params: { email: string; password: string }) => {
  const { data } = await client.post('/users/login', params);

  localStorage.setItem('token', data);

  return data;
};

export const createProblem = async (params: {
  category: string;
  reward: number;
  deadline: Date;
  body: string;
}) => {
  const token = localStorage.getItem('token');

  const { data } = await client.post('/problems', params, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export const getProblems = async () => {
  const { data } = await client.get('/problems');

  return data;
};
