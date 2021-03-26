import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="\images\download.png" />

      <div className="header_Search">
        <input className="header_searchInput" type="text" />
        {/*logo*/}
        <SearchIcon className="search__Icon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello User</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">$Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your </span>
          <span className="header_optionLineTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <AddShoppingCartIcon />
          <span
            className="header_optionLineTwo 
          header__basketCount"
          >
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
