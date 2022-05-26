import axios from 'axios';
import { API_KEY, NYT_BASE_URL } from 'configs';

export const api = axios.create({
  baseURL: NYT_BASE_URL,
  params: {
    ['api-key']: API_KEY,
  },
});
