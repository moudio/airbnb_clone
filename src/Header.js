import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/core/Icon/';
function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://logos-world.net/wp-content/uploads/2020/07/Airbnb-Logo.png"
        alt=""
      />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
