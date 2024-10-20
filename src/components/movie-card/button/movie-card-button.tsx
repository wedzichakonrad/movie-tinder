import React from 'react';
import './movie-card-button.sass';

type MovieCardButtonProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  variant: string;
  text: string;
  onClick: (variant: string) => void;
  disabled?: boolean;
};

export const MovieCardButtonVariants = {
  accept: 'accept',
  reject: 'reject',
};

const MovieCardButton = ({ Icon, variant = '', text, onClick, disabled }: MovieCardButtonProps) => {
  return (
    <button
      className={`movie-card-button movie-card-button--${variant}`}
      onClick={() => onClick(variant)}
      disabled={disabled}>
      <div className='movie-card-button__icon-wrapper'>
        <Icon />
      </div>
      <span>{text}</span>
    </button>
  );
};

export default MovieCardButton;
