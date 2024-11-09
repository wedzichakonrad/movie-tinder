import React from 'react';
import MainContainer from './containers/main-container/main-container';
import TopBar from './components/top-bar/top-bar';
import { Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Box className='dashboard'>
      <TopBar />
      <MainContainer />
    </Box>
  );
};

export default Dashboard;
