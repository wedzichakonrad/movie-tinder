import MovieCard from './movie-card'
import {render, screen} from "@testing-library/react";

it('should match snapshot for movie card component', () => {
  const movie = {
    id: 'id1',
    imageURL: 'url',
    title: 'title',
    summary: 'lorem ipsum',
    rating: 4,
  }

  render(<MovieCard movie={movie} />)

  const component = screen.getByText(movie.title);
  expect(component).toBeInTheDocument();
})
