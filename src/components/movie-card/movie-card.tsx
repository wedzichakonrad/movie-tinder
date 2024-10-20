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
  handleEventDown?: (e: React.MouseEvent | React.TouchEvent, actionType: string) => void;
  handleEventMove?: (e: React.MouseEvent | React.TouchEvent, actionType: string) => void;
  onDraggingEnd?: () => void;
  styles?: {};
};

export const EventTypes = {
  mouse: 'mouse',
  touch: 'touch',
};

const MovieCard = ({
  movie,
  onClick,
  disabled,
  handleEventDown,
  handleEventMove,
  onDraggingEnd,
  styles,
}: MovieCardProps) => {
  const onButtonClick = (variant: string) => {
    onClick?.(variant, movie.id);
  };

  return (
    <div
      onMouseDown={(e: React.MouseEvent) => handleEventDown?.(e, EventTypes.mouse)}
      onMouseMove={(e: React.MouseEvent) => handleEventMove?.(e, EventTypes.mouse)}
      onMouseLeave={onDraggingEnd}
      onMouseUp={onDraggingEnd}
      onTouchStart={(e: React.TouchEvent) => handleEventDown?.(e, EventTypes.touch)}
      onTouchMove={(e: React.TouchEvent) => handleEventMove?.(e, EventTypes.touch)}
      onTouchEnd={onDraggingEnd}
      style={styles}
      className='movie-card'>
      <div className='movie-card__inner'>
        <div className='movie-card__heading-wrapper'>
          <h2>{movie.title}</h2>
          <span>({movie.rating}/10)</span>
        </div>
        <div className='movie-card__img-wrapper'>
          <img draggable={false} src={movie.imageURL} alt={movie.title} />
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
