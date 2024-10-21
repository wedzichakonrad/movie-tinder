import { data } from './data';

export const getMoviesPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In resolve, we would normally return response.data
      // const response = await axios.get(`${Config.baseURL}/recommendations`);
      resolve(data);
    }, 1000);
  });
};

export const getMovies = ({ onPending, onGet }) => {
  onPending(true);
  getMoviesPromise()
    .then((resData) => {
      onGet(resData);
    })
    .catch((err) => {
      throw new Error(err);
    })
    .finally(() => {
      onPending(false);
    });
};
