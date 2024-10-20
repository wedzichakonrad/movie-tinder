import React, { useRef, useState } from 'react';
import { EventTypes } from '../components/movie-card/movie-card';

type UseMovieCardDragProps = {
  onMouseDown: () => void;
};

export const useMovieCardDrag = ({ onMouseDown }: UseMovieCardDragProps) => {
  const [draggingProps, setDraggingProps] = useState({
    styles: { transform: '0' },
    isDragging: false,
    calculatedPosition: 0,
  });
  const startClientXRef = useRef(0);

  const calculatePosition = (clientX: number) => {
    let calculatedPosition = clientX - startClientXRef.current;
    if (calculatedPosition > 100) {
      calculatedPosition = 100;
    }
    if (calculatedPosition < 0) {
      calculatedPosition = 0;
    }
    return calculatedPosition;
  };

  const getClientX = (event: React.MouseEvent | React.TouchEvent, actionType: string) => {
    if (EventTypes.mouse === actionType) {
      if ('clientX' in event) return event.clientX;
      return 0;
    } else {
      if ('changedTouches' in event) return event.changedTouches[0].clientX;
      return 0;
    }
  };

  const handleEventDown = (event: React.MouseEvent | React.TouchEvent, actionType: string) => {
    const clientX = getClientX(event, actionType);
    startClientXRef.current = clientX;
    const calculatedPosition = calculatePosition(clientX);
    setDraggingProps((state) => ({
      ...state,
      styles: { transform: `translateX(${calculatedPosition}px)` },
      isDragging: true,
    }));
  };

  const handleEventMove = (event: React.MouseEvent | React.TouchEvent, actionType: string) => {
    if (draggingProps.isDragging) {
      const clientX = getClientX(event, actionType);
      const calculatedPosition = calculatePosition(clientX);
      setDraggingProps((state) => ({
        ...state,
        styles: { transform: `translateX(${calculatedPosition}px)` },
        calculatedPosition,
      }));
    }
  };

  const onDraggingEnd = () => {
    setDraggingProps((state) => ({
      ...state,
      isDragging: false,
      styles: { transform: 'translateX(0px)' },
      calculatedPosition: 0,
    }));
    if (draggingProps.calculatedPosition === 100) {
      onMouseDown();
    }
  };

  return { handleEventDown, handleEventMove, onDraggingEnd, draggingProps };
};
