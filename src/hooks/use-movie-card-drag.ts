import React, { useRef, useState } from 'react';

type UseMovieCardDragProps = {
  onMouseDown: () => void;
}

export const useMovieCardDrag = ({onMouseDown}: UseMovieCardDragProps) => {
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

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setDraggingProps(state => ({...state, isDragging: true}));
    startClientXRef.current = event.clientX;
    const calculatedPosition = calculatePosition(event.clientX);
    setDraggingProps(state => ({...state, styles: { transform: `translateX(${calculatedPosition}px)` }}));
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (draggingProps.isDragging) {
      const calculatedPosition = calculatePosition(event.clientX);
      setDraggingProps(state => ({...state, styles: { transform: `translateX(${calculatedPosition}px)` }, calculatedPosition}));
    }
  };

  const onDraggingEnd = () => {
    setDraggingProps(state => ({...state, isDragging: false, styles: { transform: 'translateX(0px)' }, calculatedPosition: 0}));
    if (draggingProps.calculatedPosition === 100) {
      onMouseDown();
    }
  };

  return { handleMouseDown, handleMouseMove, onDraggingEnd, draggingProps };
};
