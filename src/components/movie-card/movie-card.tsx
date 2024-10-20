import React from 'react';
import './movie-card.sass';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import MovieCardButton, { MovieCardButtonVariants } from './button/movie-card-button';
import { MovieProps } from '../../utils/types';

type MovieCardProps = {
  movie: MovieProps;
  onClick?: (variant: string, movieId: string) => void;
  disabled?: boolean;
  handleActionDown?: (e: React.MouseEvent | React.TouchEvent, actionType: string) => void;
  handleActionMove?: (e: React.MouseEvent | React.TouchEvent, actionType: string) => void;
  onDraggingEnd?: () => void;
  styles?: {};
};

export const ActionTypes = {
  mouse: 'mouse',
  touch: 'touch',
};

const MovieCard = ({
  movie,
  onClick,
  disabled,
  handleActionDown,
  handleActionMove,
  onDraggingEnd,
  styles,
}: MovieCardProps) => {
  const onButtonClick = (variant: string) => {
    onClick?.(variant, movie.id);
  };

  return (
    <div
      onMouseDown={(e: React.MouseEvent) => handleActionDown?.(e, ActionTypes.mouse)}
      onMouseMove={(e: React.MouseEvent) => handleActionMove?.(e, ActionTypes.mouse)}
      onMouseLeave={onDraggingEnd}
      onMouseUp={onDraggingEnd}
      onTouchStart={(e: React.TouchEvent) => handleActionDown?.(e, ActionTypes.touch)}
      onTouchMove={(e: React.TouchEvent) => handleActionMove?.(e, ActionTypes.touch)}
      onTouchEnd={onDraggingEnd}
      style={styles}
      className='movie-card'>
      <div className='movie-card__inner'>
        <div className='movie-card__heading-wrapper'>
          <h2>{movie.title}</h2>
          <span>({movie.rating}/10)</span>
        </div>
        <div className='movie-card__img-wrapper'>
          <img draggable={false} src={movie.imageURL} alt='movie' />
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


MovieCard.displayName = 'MovieCard';
export default React.memo(MovieCard);
