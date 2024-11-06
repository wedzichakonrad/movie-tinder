import React from 'react';
import { MovieSection } from '../../components/movie-section/movie-section';
import { Box } from '@mui/material';

const MainContainer = () => {
  return (
    <Box component='main' sx={{ position: 'relative', top: '56px' }}>
      <MovieSection />
    </Box>
  );
};

export default MainContainer;
