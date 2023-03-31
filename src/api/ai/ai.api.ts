import { AxiosInstance } from 'axios';
import { aiEnpoints } from '../../utils/constants/endpoints';
import { apiAiInstance } from '../instance';
import { AiMessages } from './ai.schema';

class AiApi {
  #instance: AxiosInstance;

  constructor(instance: AxiosInstance) {
    this.#instance = instance;
  }

  message = async (messages: AiMessages) => {
    return this.#instance.post(aiEnpoints.completions, {
      model: 'gpt-3.5-turbo',
      messages,
      temperature: 0.7,
    });
  };
}

export const aiApi = new AiApi(apiAiInstance);
