import React from 'react';
import MainContainer from './containers/main-container/main-container';
import TopBar from './components/top-bar/top-bar';
import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className='dashboard'>
        <TopBar />
        <MainContainer />
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
