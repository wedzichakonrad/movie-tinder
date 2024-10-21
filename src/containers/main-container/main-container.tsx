import React from 'react';
import './main-container.sass';
import { MovieSection } from '../../components/movie-section/movie-section';

const MainContainer = () => {
  return (
    <main className='main-container'>
      <div className='main-container__inner'>
        <MovieSection />
      </div>
    </main>
  );
};

export default MainContainer;
