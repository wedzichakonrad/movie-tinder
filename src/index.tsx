import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './dashboard';
import { CurrentMovieProvider } from './providers/current-movie-provider';
import { theme } from './theme/theme';
import { ThemeProvider } from '@mui/material';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CurrentMovieProvider>
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    </CurrentMovieProvider>
  </React.StrictMode>
);
