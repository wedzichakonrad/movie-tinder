import axios from 'axios';
import { Config } from '../utils/config';

export const updateMovieRecommendation = async ({ id, variant }) => {
  try {
    const response = await axios.put(
      `${Config.baseURL}/recommendations/${id}/${variant}`
    );
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};
