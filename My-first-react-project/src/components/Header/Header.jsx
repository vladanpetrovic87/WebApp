import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ isLoggedIn, onLogIn, onLogOut, name }) => {
  console.log("Header:", isLoggedIn);
  let onClickCallback = onLogIn;
  let buttonText = "LogIn";

  if (isLoggedIn) {
    onClickCallback = onLogOut;
    buttonText = "LogOut";
  }
  return (
    <nav className="navbar header">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-center"><Link to='/'>Home</Link></span>
        {isLoggedIn ? <p>{name}</p> : null}
        <button onClick={onClickCallback}>{buttonText}</button>
      </div>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-center"><Link to='/blog'>Blog</Link></span>
      </div>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-center"><Link to='/about'>About</Link></span>
      </div>
    </nav>
  );
};

export { Header };
