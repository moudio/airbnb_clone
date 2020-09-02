import React from 'react';
import Banner from './Banner';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="home__section">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
