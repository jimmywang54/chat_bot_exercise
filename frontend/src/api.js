import axios from 'axios';
import { BACKEND_SERVICE_URL } from './constants';

export const sendMessageToBackend = async (input) => {
  try {
    const response = await axios.post(`${BACKEND_SERVICE_URL}/api/chat`, {
      message: input
    });
    return response.data.response;
  } catch (error) {
    console.error('Error fetching response: ', error);
    throw error;
  }
};
