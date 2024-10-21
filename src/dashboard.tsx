import React from 'react';
import Footer from './components/footer/footer';
import MainContainer from './containers/main-container/main-container';
import TopBar from './components/top-bar/top-bar';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <TopBar />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Dashboard;
