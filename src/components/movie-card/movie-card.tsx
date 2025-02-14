import React from 'react';
import { ReactComponent as Check } from '../../assets/check.svg';
import { ReactComponent as Cross } from '../../assets/cross.svg';
import { MovieProps } from '../../utils/types';
import { Button, Card, CardActions, CardHeader, CardMedia, styled } from '@mui/material';

type MovieCardProps = {
  movie: MovieProps;
  onClick?: (variant: string, movieId: string) => void;
  disabled?: boolean;
  handleEventDown?: (e: React.MouseEvent | React.TouchEvent, actionType: number) => void;
  handleEventMove?: (e: React.MouseEvent | React.TouchEvent, actionType: number) => void;
  onDraggingEnd?: () => void;
  styles?: {};
};

export enum EventTypes {
  MOUSE,
  TOUCH,
}

export const MovieCardButtonVariants = {
  accept: 'accept',
  reject: 'reject',
};

const StyledAcceptButton = styled(Button)(({ theme }: any) => ({
  color: theme.colors.fontPrimary,
  width: '50%',
  border: `1px solid ${theme.colors.bgAccept}`,
  ':hover, :focus': {
    backgroundColor: theme.colors.bgAccept,
    color: theme.colors.fontSecondary,
    svg: {
      fill: theme.colors.fontSecondary,
    },
  },
}));

const StyledRejectButton = styled(Button)(({ theme }: any) => ({
  color: theme.colors.fontPrimary,
  border: `1px solid ${theme.colors.bgReject}`,
  width: '50%',
  ':hover, :focus': {
    backgroundColor: theme.colors.bgReject,
    color: theme.colors.fontSecondary,
    'svg path': {
      stroke: theme.colors.fontSecondary,
    },
  },
}));

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

  console.log('test')

  return (
    <Card
      onMouseDown={(e: React.MouseEvent) => handleEventDown?.(e, EventTypes.MOUSE)}
      onMouseMove={(e: React.MouseEvent) => handleEventMove?.(e, EventTypes.MOUSE)}
      onMouseLeave={onDraggingEnd}
      onMouseUp={onDraggingEnd}
      onTouchStart={(e: React.TouchEvent) => handleEventDown?.(e, EventTypes.TOUCH)}
      onTouchMove={(e: React.TouchEvent) => handleEventMove?.(e, EventTypes.TOUCH)}
      onTouchEnd={onDraggingEnd}
      style={styles}
      sx={{ maxHeight: 600 }}>
      <CardHeader title={movie.title} subheader={`${movie.rating} / 10`} />
      <CardMedia
        draggable={false}
        component='img'
        height='194'
        image={movie.imageURL}
        alt={movie.title}
        sx={{ objectFit: 'contain', background: 'black' }}
      />
      <CardActions>
        <StyledAcceptButton
          disableRipple
          onClick={() => onButtonClick(MovieCardButtonVariants.accept)}
          disabled={disabled}>
          <>
            <Check />
            Accept
          </>
        </StyledAcceptButton>
        <StyledRejectButton
          disableRipple
          onClick={() => onButtonClick(MovieCardButtonVariants.reject)}
          disabled={disabled}>
          <>
            <Cross />
            Reject
          </>
        </StyledRejectButton>
      </CardActions>
    </Card>
  );
};

MovieCard.displayName = 'MovieCard';
export default React.memo(MovieCard);
