import axios from 'axios';

const axiosRequest = axios.create({
  baseURL: 'http://mock.r9k.ir/api',
});

export { axiosRequest };
