import React from 'react';
import MovieCard from '../movie-card/movie-card';
import './movie-section.sass';
import { useCurrentMovie } from '../../providers/current-movie-provider';
import { useEffect, useState } from 'react';
import { getMovies } from '../../api/get-movies';
import { updateMovieRecommendation } from '../../api/update-movie-recommendation';
import Loader from '../loader/loader';
import { useMovieCardDrag } from '../../hooks/use-movie-card-drag';
import { MovieCardButtonVariants } from '../movie-card/button/movie-card-button';
import { MovieProps } from '../../utils/types';
import { Grid2, Stack, Typography } from '@mui/material';

export const MovieSection = () => {
  const context = useCurrentMovie();
  const [isAnimationOngoing, setIsAnimationOngoing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const currentMovie = movies?.[context.currentMovieIndex];
  const nextMovie = movies?.[context.currentMovieIndex + 1];

  const fetchMovies = async () => {
    const movies = await getMovies({ onPending: setIsFetching });
    setMovies(movies);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const changeMovie = () => {
    context.setCurrentMovieIndex((state) => state + 1);
    setIsAnimationOngoing(false);
  };

  const onButtonClick = (variant: string, movieId: string) => {
    updateMovieRecommendation({ variant, movieId });
    setIsAnimationOngoing(true);
    setTimeout(() => changeMovie(), 700);
  };

  const { handleEventDown, handleEventMove, onDraggingEnd, draggingProps } = useMovieCardDrag({
    onMouseDown: () => onButtonClick(MovieCardButtonVariants.reject, currentMovie.id),
  });

  return (
    <Stack sx={{ padding: '24px' }} data-testid='movie-section'>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Grid2 container className='movie-section__card-wrapper'>
            {nextMovie && (
              <Grid2
                className={`movie-section__next-movie movie-section__next-movie--${isAnimationOngoing ? 'active' : ''}`}>
                <MovieCard movie={nextMovie} />
              </Grid2>
            )}
            {currentMovie ? (
              <Grid2
                className={`movie-section__current-movie movie-section__current-movie--${isAnimationOngoing ? 'active' : ''}`}>
                <MovieCard
                  movie={currentMovie}
                  onClick={onButtonClick}
                  disabled={isAnimationOngoing}
                  handleEventDown={handleEventDown}
                  handleEventMove={handleEventMove}
                  onDraggingEnd={onDraggingEnd}
                  styles={draggingProps.styles}
                />
              </Grid2>
            ) : (
              'No more movies!'
            )}
            <Grid2
              className={`movie-section__swipe-popup movie-section__swipe-popup--${draggingProps.calculatedPosition === 100 ? 'active' : ''}`}>
              Reject
            </Grid2>
          </Grid2>
          <Stack className='movie-section__summary-wrapper'>
            {isAnimationOngoing ? (
              <Loader />
            ) : (
              currentMovie && (
                <>
                  <Stack>
                    <Typography variant='h3' component='h3'>
                      Summary
                    </Typography>
                  </Stack>
                  <Stack>
                    <Typography variant='subtitle2' component='p'>
                      {currentMovie.summary}
                    </Typography>
                  </Stack>
                </>
              )
            )}
          </Stack>
        </>
      )}
    </Stack>
  );
};
