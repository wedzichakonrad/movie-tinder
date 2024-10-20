import React from 'react';
import './movie-card.sass';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import MovieCardButton, {
  MovieCardButtonVariants,
} from './button/movie-card-button';
import { MovieProps } from '../../utils/types';

type MovieCardProps = {
  movie: MovieProps;
  onClick?: (variant: string, movieId: string) => void;
  disabled?: boolean;
};

const MovieCard = ({ movie, onClick, disabled }: MovieCardProps) => {

  const onButtonClick = (variant: string) => {
    onClick?.(variant, movie.id);
  };

  return (
    <div className='movie-card'>
      <div className='movie-card__inner'>
        <div className='movie-card__heading-wrapper'>
          <h2>{movie.title}</h2>
          <span>({movie.rating}/10)</span>
        </div>
        <div className='movie-card__img-wrapper'>
          <img src={movie.imageURL} alt='movie' />
        </div>
        <div className='movie-card__buttons-wrapper'>
          <MovieCardButton
            text='Accept'
            Icon={Check}
            variant={MovieCardButtonVariants.accept}
            onClick={onButtonClick}
            disabled={disabled}
          />
          <MovieCardButton
            text='Reject'
            Icon={Cross}
            variant={MovieCardButtonVariants.reject}
            onClick={onButtonClick}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
