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
    </div>
  );
}

export default SearchPage;
