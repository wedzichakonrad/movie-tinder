import React from 'react';
import { AppBar, Typography } from '@mui/material';

const TopBar = () => {
  return (
      <AppBar>
        <Typography variant='h6' component='div' sx={{ padding: '12px 12px 12px 24px' }}>
          Movie tinder
        </Typography>
      </AppBar>
  );
};

export default TopBar;
