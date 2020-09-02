import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResult';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays · 26 august to 30 august · 2 guests </p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">Cancellation Flexibility</Button>{' '}
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        title="Stay at this spacious Edwardian House"
        descrition="Stay at this spacious Edwardian House"
        location="Private room in center of London"
        price="£30 / night"
        star={4.73}
        total="£117 total"
      />
      <SearchResult
        img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
        title="London Studio Apartments"
        descrition="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        location="Private room in center of London"
        price="£35 / night"
        star={3.8}
        total="£207 total"
      />{' '}
      <SearchResult
        img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
        title="Stay at this spacious Edwardian House"
        descrition="Stay at this spacious Edwardian House"
        location="Private room in center of London"
        price="£30 / night"
        star={4.73}
        total="£117 total"
      />{' '}
      <SearchResult
        img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
        title="Stay at this spacious Edwardian House"
        descrition="Stay at this spacious Edwardian House"
        location="Private room in center of London"
        price="£30 / night"
        star={4.73}
        total="£117 total"
      />{' '}
      <SearchResult
        img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
        title="Stay at this spacious Edwardian House"
        descrition="Stay at this spacious Edwardian House"
        location="Private room in center of London"
        price="£65/ night"
        star={4.23}
        total="£580 total"
      />{' '}
      <SearchResult
        img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
        title="5 Star Luxury Apartment"
        descrition="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        location="Private room in center of London"
        price="£90 / night"
        star={3.85}
        total="£650 total"
      />
    </div>
  );
}

export default SearchPage;
