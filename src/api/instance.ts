import Axios from 'axios';
import { baseURL } from '../utils/constants/endpoints';

export const apiAiInstance = Axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_OPENAI_API_KEY}`,
  },
});
