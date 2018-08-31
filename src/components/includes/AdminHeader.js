import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img
            className="header__logo"
            alt="logo"
            src="https://natours.netlify.com/img/logo-white.png"
          />
        </div>

        <div className="header__center" >
            <h1 className="header__text-center">Webvoordelig Admin Panel</h1>
        </div>
      </header>
    );
  }
}

export default Header;
