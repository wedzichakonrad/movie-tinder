import { Config } from '../utils/config';

interface UpdateMovieRecommendationProps {
  variant: string;
  movieId: string;
}

const updateMovieRecommendationPromise = ({ variant, movieId }: UpdateMovieRecommendationProps) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In resolve, we would normally return response.data
      // const response = await axios.put(`${Config.baseURL}/recommendations/${id}/${variant}`);
      resolve(`${Config.baseURL}/recommendations/${movieId}/${variant}`);
    }, 1000);
  });
};
export const updateMovieRecommendation = async ({ variant, movieId }: UpdateMovieRecommendationProps) => {
  updateMovieRecommendationPromise({ variant, movieId }).catch((err) => {
    throw new Error(err);
  });
};
