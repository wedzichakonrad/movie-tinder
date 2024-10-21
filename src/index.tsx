import React from 'react';
import './style/style.sass';
import ReactDOM from 'react-dom/client';
import Dashboard from './dashboard';
import { CurrentMovieProvider } from './providers/current-movie-provider';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CurrentMovieProvider>
      <Dashboard />
    </CurrentMovieProvider>
  </React.StrictMode>
);
