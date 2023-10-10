import React from "react";
import "./styles/header.css";
import "./styles/case.css";
import {  useSelector } from "react-redux"; // Импортируем хуки для Redux

import { Link } from "react-router-dom";

const Header = () => {
  
  const balance = useSelector((state) => state.balance); // Получаем баланс из состояния Redux

  return (
    <div className="header_main_div">
      <div className="header_left_side">
        <Link to="/home">
          <img
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/433340/9ccd96a53fb7ca401f232b4322fb14df2b346669.png"
            className="header_logo"
            alt="лого"
          />
        </Link>
      </div>
      <div className="header_right_side">
        <Link to="/refill" className="balance_link">
          <div className="balance_div price_RUB">{balance}</div>
        </Link>
        <Link to="/profile">
          <img
            src="https://avatars.akamai.steamstatic.com/6c5cf1124e9766c3bf2a2a45a5f15ef32459c091_full.jpg"
            className="header_avatar"
            alt="avatar"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Header;
