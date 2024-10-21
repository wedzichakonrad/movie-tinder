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

export const MovieSection = () => {
  const context = useCurrentMovie();
  const [isAnimationOngoing, setIsAnimationOngoing] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const currentMovie = movies?.[context.currentMovieIndex];
  const nextMovie = movies?.[context.currentMovieIndex + 1];

  useEffect(() => {
    getMovies({ onPending: setIsFetching, onGet: setMovies });
  }, []);

  const changeMovie = () => {
    context.setCurrentMovieIndex((state) => state + 1);
    setIsAnimationOngoing(false);
  };

  const onButtonClick = (variant: string, movieId: string) => {
    updateMovieRecommendation(variant, movieId);
    setIsAnimationOngoing(true);
    setTimeout(() => changeMovie(), 700);
  };

  const { handleEventDown, handleEventMove, onDraggingEnd, draggingProps } = useMovieCardDrag({
    onMouseDown: () => onButtonClick(MovieCardButtonVariants.reject, currentMovie.id),
  });

  return (
    <section className='movie-section' data-testid='movie-section'>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <div className='movie-section__card-wrapper'>
            {nextMovie && (
              <div
                className={`movie-section__next-movie movie-section__next-movie--${isAnimationOngoing ? 'active' : ''}`}>
                <MovieCard movie={nextMovie} />
              </div>
            )}
            {currentMovie ? (
              <div
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
              </div>
            ) : (
              'No more movies!'
            )}
            <div
              className={`movie-section__swipe-popup movie-section__swipe-popup--${draggingProps.calculatedPosition === 100 ? 'active' : ''}`}>
              Reject
            </div>
          </div>
          <div className='movie-section__summary-wrapper'>
            {isAnimationOngoing ? (
              <Loader />
            ) : (
              currentMovie && (
                <>
                  <h3>Summary</h3>
                  <p>{currentMovie.summary}</p>
                </>
              )
            )}
          </div>
        </>
      )}
    </section>
  );
};
