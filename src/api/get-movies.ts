import { data } from './data';

const mockMovie = {
      id: '1and3011',
      imageURL:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUzNTE2NTkzMV5BMl5BanBnXkFtZTgwMDAzOTUyMDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
      title: 'Inferno',
      summary: 'Lorem ipsum.... 1',
      rating: 5.3,
};

interface GetMoviesProps {
  onPending: (isPending: boolean) => void;
}

export const getMoviesPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In resolve, we would normally return response.data
      // const response = await axios.get(`${Config.baseURL}/recommendations`);
      resolve(data);
    }, 1000);
  });
};

export const getMovies = async ({ onPending }: GetMoviesProps) => {
  onPending(true);
  return getMoviesPromise()
    .then((resData) => {
      return resData || [mockMovie];
    })
    .catch((err) => {
      throw new Error(err);
    })
    .finally(() => {
      onPending(false);
    });
};
