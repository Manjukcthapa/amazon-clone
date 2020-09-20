import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <nav className="header">
      <Link>
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header-search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <Link  to="/logIn" className="header-link">
          <div className="header_option">
            <span className="option-one">Hello,</span>
            <span className="option-two">Sign In</span>
          </div>
        </Link>
        <Link className="header-link">
          <div className="header_option">
            <span className="option-one">Returns</span>
            <span className="option-two">& Orders</span>
          </div>
        </Link>
        <Link className="header-link">
          <div className="header_option">
            <span className="option-one">Your,</span>
            <span className="option-two">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header-link">
          <div className="header-optionBasket">
          <ShoppingBasketIcon className="shoppingBasketIcon" />
              <span className="option-two basket_count">0</span>

          </div>
        </Link>
      </div>
    </nav>
  );
}
export default Header;
