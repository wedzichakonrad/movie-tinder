import React from 'react';
import { AppBar, Typography } from '@mui/material';

const TopBar = () => {
  return (
      <AppBar>
        <Typography variant='h4' component='div' sx={{ padding: '0 0 0 24px' }}>
          Movie tinder
        </Typography>
      </AppBar>
  );
};

export default TopBar;
