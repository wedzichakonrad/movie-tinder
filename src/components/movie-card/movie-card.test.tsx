import MovieCard from './movie-card';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../theme/theme';

it('should render movie card component', () => {
  const movie = {
    id: 'id1',
    imageURL: 'url',
    title: 'title',
    summary: 'lorem ipsum',
    rating: 4,
  };

  render(
    <ThemeProvider theme={theme}>
      <MovieCard movie={movie} />
    </ThemeProvider>
  );

  const component = screen.getByText(movie.title);
  expect(component).toBeInTheDocument();
});
