import MovieCard from "./movie-card";
import renderer from 'react-test-renderer';

it('should match snapshot for movie card component', () => {
    const movie = {
        id: 'id1',
        imageURL: 'url',
        title: 'title',
        summary: 'lorem ipsum',
        rating: 4,
    };

    const component = renderer.create(
        <MovieCard movie={movie} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});