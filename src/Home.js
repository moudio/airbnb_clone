import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          tile="Online Experiences"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Home;
